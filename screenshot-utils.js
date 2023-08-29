const puppeteer = require("puppeteer");
const sharp = require('sharp');
const fs = require('fs');

// Constants
const SCREENSHOT_PATH = "./src/images/screenshots";
const SCREENSHOT_QUALITY = 80;
const VIEWPORT_WIDTH = 1024;
const VIEWPORT_HEIGHT = 1366;
const PAGE_NAVIGATION_TIMEOUT = 30000;

async function generatePlaceholderImage(slug) {
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
    .toFile(`${SCREENSHOT_PATH}/${slug}.jpg`);
  } catch (error) {
    throw new Error(`Failed to generate placeholder image: ${error.message}`);
  }
}

async function generateScreenshot(page, url, slug, reporter, retryCount = 3) {
  let success = false;

  for (let attempt = 1; attempt <= retryCount; attempt++) {
    try {
      await page.goto(url, { waitUntil: "networkidle2", timeout: PAGE_NAVIGATION_TIMEOUT });
      await page.screenshot({
        path: `${SCREENSHOT_PATH}/${slug}.jpg`,
        quality: SCREENSHOT_QUALITY
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

async function shouldGenerateScreenshot(slug, isDevelopment, isProduction, shouldForceRegenerate, screenshotExistsInS3) {
  if (isDevelopment) {
    if (shouldForceRegenerate) return true;
    return !fs.existsSync(`${SCREENSHOT_PATH}/${slug}.jpg`);
  }
  if (isProduction) {
    return !(await screenshotExistsInS3(slug));
  }
}

module.exports = {
  generatePlaceholderImage,
  generateScreenshot,
  shouldGenerateScreenshot
};
