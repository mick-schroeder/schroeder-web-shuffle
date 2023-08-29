const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");
const AWS = require("aws-sdk");
const sharp = require('sharp');

require('aws-sdk/lib/maintenance_mode_message').suppress = true;


const shouldForceRegenerate = process.env.FORCE_REGENERATE === "true";

// Constants
const BUCKET_NAME = "web-shuffle-screenshots";
const SCREENSHOT_PATH = "./src/images/screenshots";

const SCREENSHOT_QUALITY = 80;
const VIEWPORT_WIDTH = 1024;
const VIEWPORT_HEIGHT = 1366;
const PAGE_NAVIGATION_TIMEOUT = 30000;
const CACHE_TIMEOUT = 12 * 60 * 60 * 1000; //12 hours

// AWS S3 setup
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

if (!fs.existsSync(SCREENSHOT_PATH)) {
  fs.mkdirSync(SCREENSHOT_PATH, { recursive: true });
}

async function generatePlaceholderImage(slug) {
  const screenshotFullPath = path.join(SCREENSHOT_PATH, `${slug}.jpg`);

  try {
      await sharp({
          create: {
              width: VIEWPORT_WIDTH,
              height: VIEWPORT_HEIGHT,
              channels: 3,
              background: { r: 200, g: 200, b: 200 }
          }
      })
      .jpeg()
      .toFile(screenshotFullPath);
  } catch (error) {
      throw new Error(`Failed to generate placeholder image: ${error.message}`);
  }
}

async function generateScreenshot(screenshotFullPath, page, url, slug, reporter, retryCount = 3) {
  let success = false;

  for (let attempt = 1; attempt <= retryCount; attempt++) {
    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: PAGE_NAVIGATION_TIMEOUT });
      await page.screenshot({
        path: screenshotFullPath,
        quality: 80
      });
      success = true;
      break;  // Exit loop if screenshot is successful
    } catch (error) {
      if (error.name === 'TimeoutError' && attempt < retryCount) {
        reporter.warn(`Attempt ${attempt} failed for ${url}. Retrying...`);
      } else if (attempt === retryCount) {
        try {
          await generatePlaceholderImage(slug);
          reporter.warn(`Generated placeholder image for ${url} after failing to capture screenshot.`);
        } catch (placeholderError) {
          reporter.error(`Failed to generate placeholder image for ${url}: ${placeholderError.message}`);
        }
      }
    }
  }

  return success;
}


async function uploadToS3(filePath, slug, reporter) {
  try {
    const data = fs.readFileSync(filePath);
    const params = {
      Bucket: BUCKET_NAME,
      Key: `${slug}.jpg`,
      Body: data,
      ContentType: "image/jpeg",
    };
    await s3.upload(params).promise();
  } catch (error) {
    reporter.warn(`Failed to upload ${slug}.jpg to S3: ${error.message}`);
  }
}


async function screenshotExistsInS3(slug) {
  try {
    const objectData = await s3.headObject({
      Bucket: BUCKET_NAME,
      Key: `${slug}.jpg`
    }).promise();
    const lastModifiedDate = new Date(objectData.LastModified);
    const now = new Date();
    return (now - lastModifiedDate) < CACHE_TIMEOUT;
  } catch (error) {
    if (error.code === 'NotFound') return false;
    throw error;
  }
}

async function shouldGenerateScreenshot(screenshotFullPath, slug, reporter) {
  if (shouldForceRegenerate) {
    reporter.log(`Regenerated ${slug}.jpg because shouldForceRegenerate is true `);
    return true;
  }
  else if (isDevelopment) {
    return !fs.existsSync(screenshotFullPath);
  }
  else if (isProduction) {
    return !(await screenshotExistsInS3(slug));
  }
}

async function downloadFromS3(slug, reporter) {
  try {
    const params = {
      Bucket: BUCKET_NAME,
      Key: `${slug}.jpg`,
    };
    const stream = require('stream');
    const util = require('util');
    const pipeline = util.promisify(stream.pipeline);
    const s3Stream = s3.getObject(params).createReadStream();
    const fileWriteStream = fs.createWriteStream(`${SCREENSHOT_PATH}/${slug}.jpg`);
    await pipeline(s3Stream, fileWriteStream);
  } catch (error) {
    reporter.warn(`Failed to download ${slug}.jpg from S3: ${error.message}`);
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  

  const resultTemplatePath = path.resolve(`src/templates/MDXPageTemplate.js`);

  const result = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "mdx-pages" } }) {
        nodes {
          childMdx {
            id
            body
            frontmatter {
              title
            }
            internal {
              contentFilePath
            }
          }
          relativePath
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  } else {
    const postTemplate = path.resolve(`./src/templates/MDXPageTemplate.js`);

    result.data.allFile.nodes.forEach(({ relativePath, childMdx }) => {
      createPage({
        path: `${path.basename(relativePath, ".mdx")}`,
        component: `${postTemplate}?__contentFilePath=${childMdx.internal.contentFilePath}`,
        context: {
          body: childMdx.body,
          title: childMdx.frontmatter.title,
          id: childMdx.id,
        },
      });
    });
  }

  // SOURCES
  const resultSources = await graphql(`
    query {
      allSourcesJson {
        edges {
          previous {
            slug
          }
          node {
            slug
            url
          }
          next {
            slug
          }
        }
      }
    }
  `);

  if (resultSources.errors) {
    reporter.panicOnBuild("Error loading Sources result", resultSources.errors);
    return;
  }
  const browser = await puppeteer.launch({ args: ['--no-sandbox'],headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT });
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);

    
  

  for (const edge of resultSources.data.allSourcesJson.edges) {
    const pagePath = `/sources/${edge.node.slug}`; 

    const screenshotFullPath = path.join(SCREENSHOT_PATH, `${edge.node.slug}.jpg`);

    if (await shouldGenerateScreenshot(screenshotFullPath, edge.node.slug, reporter)) {
      try {
          reporter.log(`Generating screenshot for ${edge.node.url}.`);
          await generateScreenshot(screenshotFullPath, page, edge.node.url, edge.node.slug, reporter);
          if (isProduction) {
              await uploadToS3(screenshotFullPath, edge.node.slug, reporter);
          }
      } catch (error) {
          reporter.warn(`Failed to generate/upload screenshot for ${edge.node.url}: ${error.message}`);
      }
    } else {
      if (isProduction) {
          try {
              reporter.log(`Downloading existing screenshot for ${edge.node.url} from S3.`);
        await downloadFromS3(edge.node.slug, reporter);
          } catch (error) {
              reporter.warn(`Failed to download screenshot for ${edge.node.url} from S3: ${error.message}`);
          }
      } else {
          reporter.log(`Screenshot for ${edge.node.url} is up-to-date.`);
      }
  }
    createPage({
      path: pagePath,
      component: path.resolve("./src/templates/SourceTemplate.js"),
      context: {
        slug: edge.node.slug,
        prevSlug: edge.previous ? edge.previous.slug : null,
        nextSlug: edge.next ? edge.next.slug : null,
      }
    });
  }

  await browser.close();
};