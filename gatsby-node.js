const path = require("path");
const puppeteer = require("puppeteer");
const { uploadToS3, screenshotExistsInS3, downloadFromS3 } = require("./s3-utils");
const { shouldGenerateScreenshot, generateScreenshot } = require("./screenshot-utils");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const CONCURRENT_TABS = parseInt(process.env.CONCURRENT_TABS) || 5; // Can be set in .env or default to 5

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;


    // (MDX page creation)

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


// ... (Sources from JSON)

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

  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const pages = await Promise.all(Array.from({ length: CONCURRENT_TABS }).map(() => browser.newPage()));

  const tasks = resultSources.data.allSourcesJson.edges.map(edge => {
    return (async () => {
      const page = pages.pop();
      const pagePath = `/sources/${edge.node.slug}`; 

      if (await shouldGenerateScreenshot(edge.node.slug)) {
        reporter.log(`Generating screenshot for ${edge.node.url}.`);
        await generateScreenshot(page, edge.node.url, edge.node.slug, reporter);
        if (process.env.NODE_ENV === "production") {
          await uploadToS3(`${path.join(__dirname, "src/images/screenshots")}/${edge.node.slug}.jpg`, edge.node.slug, reporter);
        }
      } else if (process.env.NODE_ENV === "production") {
        reporter.log(`Downloading screenshot for ${edge.node.url} from S3.`);
        await downloadFromS3(edge.node.slug, reporter);
      }
      pages.push(page);

      createPage({
        path: pagePath,
        component: path.resolve("./src/templates/SourceTemplate.js"),
        context: {
          slug: edge.node.slug,
          prevSlug: edge.previous ? edge.previous.slug : null,
          nextSlug: edge.next ? edge.next.slug : null,
        },
      });
    })();
  });

  await Promise.all(tasks);
  await browser.close();
};
