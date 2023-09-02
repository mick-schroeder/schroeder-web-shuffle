const path = require("path");
const fs = require("fs");
const { preProcessSources } = require('./processSources.js');
const { onPreBootstrap } = require("gatsby");

const { report } = require("process");

require("aws-sdk/lib/maintenance_mode_message").suppress = true;

const shouldForceRegenerate = process.env.FORCE_REGENERATE === "true";

// Constants
const JSON_PATH = './src/data/sources.json';
const SCREENSHOT_PATH = "./src/images/screenshots"; // match path's inside JSON
const CONCURRENT_PAGES = 5;

const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";



exports.onPreBootstrap = async ({ reporter }) => {
  if (!fs.existsSync(SCREENSHOT_PATH)) {
    fs.mkdirSync(SCREENSHOT_PATH, { recursive: true });
  }
  await new Promise(resolve => {
    preProcessSources(JSON_PATH, CONCURRENT_PAGES, reporter).then(() => {
      resolve();
    });
  });
};

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

  for (const edge of resultSources.data.allSourcesJson.edges) {
    const pagePath = `/sources/${edge.node.slug}`;
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
};
