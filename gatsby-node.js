const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");
const AWS = require("aws-sdk");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

// Constants
const BUCKET_NAME = "web-shuffle-screenshots";
const SCREENSHOT_PATH = "./src/images/screenshots";
const SCREENSHOT_QUALITY = 80;
const VIEWPORT_WIDTH = 768;
const VIEWPORT_HEIGHT = 1366;
const PAGE_NAVIGATION_TIMEOUT = 30000;
const CACHE_TIMEOUT = 23 * 60 * 60 * 1000; //23 hours

// AWS S3 setup
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

async function generateScreenshot(page, url, slug, reporter) {
  try {
    await page.goto(url, { waitUntil: "networkidle2", timeout: PAGE_NAVIGATION_TIMEOUT });
  } catch (error) {
    if (error.message.includes("Navigation timeout")) {
      reporter.warn(`Navigation timeout reached for ${url}, attempting screenshot anyway...`);
    } else {
      throw error;
    }
  }
  await page.screenshot({
    path: `${SCREENSHOT_PATH}/${slug}.jpg`,
    quality: SCREENSHOT_QUALITY
  });
}

async function uploadToS3(filePath, slug) {
  const data = fs.readFileSync(filePath);
  const params = {
    Bucket: BUCKET_NAME,
    Key: `${slug}.jpg`,
    Body: data,
    ContentType: "image/jpeg",
  };
  await s3.upload(params).promise();
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

async function shouldGenerateScreenshot(slug) {
  if (isDevelopment) {
    return !fs.existsSync(`${SCREENSHOT_PATH}/${slug}.jpg`);
  }
  if (isProduction) {
    return !await screenshotExistsInS3(slug);
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

    if (await shouldGenerateScreenshot(edge.node.slug)) {
      try {
        reporter.log(`Generating screenshot for ${edge.node.url}.`);
        await generateScreenshot(page, edge.node.url, edge.node.slug, reporter);
        if (isProduction) {
          await uploadToS3(`${SCREENSHOT_PATH}/${edge.node.slug}.jpg`, edge.node.slug);
        }
      } catch (error) {
        reporter.warn(`Failed to generate/upload screenshot for ${edge.node.url}: ${error.message}`);
      }
    }

    createPage({
      path: pagePath,
      component: path.resolve("./src/templates/SourceTemplate.js"),
      context: {
        slug: edge.node.slug,
        prevSlug: edge.previous ? edge.previous.slug : null,
        nextSlug: edge.next ? edge.next.slug : null,
      },
    });
  }

  await browser.close();
};
