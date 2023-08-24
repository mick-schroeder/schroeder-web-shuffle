const http = require("https");
const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

exports.onPreBuild = async ({ store }, pluginOptions) => {
  const projectRoot = process.cwd(); // Get the root directory of the Gatsby project
  const { sourcesJsonPath } = pluginOptions;
  const sourcesJsonAbsolutePath = path.join(projectRoot, sourcesJsonPath);
  const sources = require(sourcesJsonAbsolutePath);

  const { pages } = store.getState();

  const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  for (const source of sources) {
    const url = source.url;
    const imagePath = path.join(__dirname, "..", source.image);
    const resizedImagePath = imagePath.replace(/\.jpg$/, "-resized.jpg");

    try {
      // Check if URL is live
      await new Promise((resolve, reject) => {
        http.get(url, (response) => {
          if (response.statusCode === 200) {
            resolve();
          } else {
            reject(new Error(`HTTP status code: ${response.statusCode}`));
          }
        });
      });

      const needsUpdate =
        !fs.existsSync(resizedImagePath) ||
        Date.now() - fs.statSync(resizedImagePath).mtimeMs >= twentyFourHours;

      if (needsUpdate) {
        // Capture screenshot with a custom viewport size
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 3000 });
        await page.goto(url);
        await page.screenshot({ path: imagePath });
        await browser.close();

        // Resize the screenshot image to 600x1500 pixels
        await sharp(imagePath).resize(600, 1500).toFile(resizedImagePath);

        console.log(`Screenshot captured and resized for ${source.name}`);
      } else {
        console.log(`Screenshot for ${source.name} is up to date`);
      }
    } catch (error) {
      console.error(
        `Error capturing screenshot for ${source.name}: ${error.message}`,
      );
    }
  }
};
