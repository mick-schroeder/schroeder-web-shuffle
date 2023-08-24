const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // MDX PAGES
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
  } else {
    resultSources.data.allSourcesJson.edges.forEach((edge) => {
      const pagePath = `/sources/${edge.node.slug}`; // Create page path

      createPage({
        path: pagePath,
        component: path.resolve("./src/templates/SourceTemplate.js"), // Create a template for the page
        context: {
          slug: edge.node.slug,
          prevSlug: edge.previous ? edge.previous.slug : null,
          nextSlug: edge.next ? edge.next.slug : null,
        },
      });
    });
  }
};
