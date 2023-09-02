const AWS = require("aws-sdk");
const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");
const sharp = require("sharp");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

const screenshotsBucket = "your-screenshots-bucket-name";
const shouldForceRegenerate = process.env.FORCE_REGENERATE === "true";

// Constants
const BUCKET_NAME = "web-shuffle-screenshots";
const SCREENSHOT_PATH = "./src/images/screenshots";

const SCREENSHOT_QUALITY = 80;
const VIEWPORT_WIDTH = 900;
const VIEWPORT_HEIGHT = 1600;
const PAGE_NAVIGATION_TIMEOUT = 60000; //30 seconds
const CACHE_TIMEOUT = 6 * 60 * 60 * 1000; //3 hours
const RETRIES = 1;

// AWS S3 setup
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

async function generatePlaceholderImage(slug) {
  const screenshotFullPath = path.join(SCREENSHOT_PATH, `${slug}.jpg`);

  try {
    await sharp({
      create: {
        width: VIEWPORT_WIDTH,
        height: VIEWPORT_HEIGHT,
        channels: 3,
        background: { r: 200, g: 200, b: 200 },
      },
    })
      .jpeg()
      .toFile(screenshotFullPath);
  } catch (error) {
    throw new Error(`Failed to generate placeholder image: ${error.message}`);
  }
}

async function generateScreenshot(
  screenshotFullPath,
  page,
  url,
  slug,
  reporter
) {
  let success = false;

  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    try {
      await page.goto(url, {
        waitUntil: "networkidle2",
        timeout: PAGE_NAVIGATION_TIMEOUT,
      });
      await page.screenshot({
        path: screenshotFullPath,
        quality: 80,
      });
      success = true;
      break; // Exit loop if screenshot is successful
    } catch (error) {
      if (error.name === "TimeoutError" && attempt < RETRIES) {
        reporter.warn(
          `Attempt ${attempt} failed for ${slug}. Error: ${error.message} Retrying...`
        );
      } else if (attempt === RETRIES) {
        try {
          reporter.warn(`Generated screenshot for ${slug} anways.`);
          await page.screenshot({
            path: screenshotFullPath,
            quality: 80,
          });
          success = true;
          break; // Exit loop if screenshot is successful
        } catch (screenshotError) {
          try {
            await generatePlaceholderImage(slug);
            reporter.warn(
              `Generated placeholder image for ${slug} after failing to capture screenshot. Error: ${error.message}`
            );
          } catch (placeholderError) {
            reporter.error(
              `Failed to generate placeholder image for ${slug}: ${placeholderError.message}`
            );
          }
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
    const objectData = await s3
      .headObject({
        Bucket: BUCKET_NAME,
        Key: `${slug}.jpg`,
      })
      .promise();
    const lastModifiedDate = new Date(objectData.LastModified);
    const now = new Date();
    return now - lastModifiedDate < CACHE_TIMEOUT;
  } catch (error) {
    if (error.code === "NotFound") return false;
    throw error;
  }
}

async function shouldGenerateScreenshot(screenshotFullPath, slug, reporter) {
  if (shouldForceRegenerate) {
    reporter.log(
      `Deciding to generate screenshot - Regenerated ${slug}.jpg because shouldForceRegenerate is true `
    );
    return true;
  } else if (isDevelopment) {
    let decision = !fs.existsSync(screenshotFullPath);
    reporter.log(`Generate new screenshot? (local file doesn't exist) - ${decision}. `);
    return decision;
  } else if (isProduction) {
    let decision = !(await screenshotExistsInS3(slug));
    reporter.log(`Generate new screenshot? (not in S3) ${decision}. `);
    return decision;
  }
}

async function downloadFromS3(slug, reporter) {
  try {
    const params = {
      Bucket: BUCKET_NAME,
      Key: `${slug}.jpg`,
    };
    const stream = require("stream");
    const util = require("util");
    const pipeline = util.promisify(stream.pipeline);
    const s3Stream = s3.getObject(params).createReadStream();
    const fileWriteStream = fs.createWriteStream(
      `${SCREENSHOT_PATH}/${slug}.jpg`
    );
    await pipeline(s3Stream, fileWriteStream);
  } catch (error) {
    reporter.warn(`Failed to download ${slug}.jpg from S3: ${error.message}`);
  }
}

async function processChunk(sourcesChunk, browser, reporter) {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "dark" },
  ]);
  await page.setViewport({ width: VIEWPORT_WIDTH, height: VIEWPORT_HEIGHT });

  for (const edge of sourcesChunk) {

    const screenshotFullPath = path.join(
      SCREENSHOT_PATH,
      `${edge.slug}.jpg`
    );
    //reporter.log(`processedPages for ${edge.slug} at ${screenshotFullPath}.`);

    if (
      await shouldGenerateScreenshot(
        screenshotFullPath,
        edge.slug,
        reporter
      )
    ) {
      try {
        reporter.log(`Generating screenshot for ${edge.url}.`);
        await generateScreenshot(
          screenshotFullPath,
          page,
          edge.url,
          edge.slug,
          reporter
        );
        if (isProduction) {
          await uploadToS3(screenshotFullPath, edge.slug, reporter);
        }
      } catch (error) {
        reporter.warn(
          `Failed to generate/upload screenshot for ${edge.url}: ${error.message}`
        );
      }
    } else {
      if (isProduction) {
        try {
          reporter.log(
            `Downloading existing screenshot for ${edge.url} from S3.`
          );
          await downloadFromS3(edge.slug, reporter);
        } catch (error) {
          reporter.warn(
            `Failed to download screenshot for ${edge.url} from S3: ${error.message}`
          );
        }
      } else {
        //reporter.log(`Screenshot for ${edge.url} is up-to-date.`);
      }
    }
  }
}

async function processSources(sources, CONCURRENT_PAGES, browser, reporter) {
  // Chunk your sources
  const sourceChunks = [];
  for (let i = 0; i < sources.length; i += CONCURRENT_PAGES) {
    sourceChunks.push(sources.slice(i, i + CONCURRENT_PAGES));
  }

  // Use Promise.all to process each chunk concurrently
  await Promise.all(
    sourceChunks.map((chunk) => processChunk(chunk, browser, reporter))
  );
}

const preProcessSources = async (JSON_PATH, CONCURRENT_PAGES, reporter) => {
  try {
    const sourcesData = require(JSON_PATH); // Load sources data from JSON

    console.log(
      "\nI have gotten the task of taking screenshots of " +
        sourcesData.length +
        " Sources"
    );

      const browser = await puppeteer.launch({
        args: ["--no-sandbox"],
        headless: "new",
      });
    
      await processSources(
        sourcesData,
        CONCURRENT_PAGES,
        browser,
        reporter
      );
    
      await browser.close();
    

    
  } catch (error) {
    reporter.error("Error loading sources data from JSON:", error);
  }
};

module.exports = {
  preProcessSources,
};
