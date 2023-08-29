const AWS = require("aws-sdk");
const fs = require("fs");

require('aws-sdk/lib/maintenance_mode_message').suppress = true;

// Constants
const BUCKET_NAME = "web-shuffle-screenshots";
const SCREENSHOT_PATH = "./src/images/screenshots";
const CACHE_TIMEOUT = 12 * 60 * 60 * 1000; //12 hours

// AWS S3 setup
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

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

module.exports = {
  uploadToS3,
  screenshotExistsInS3,
  downloadFromS3
};
