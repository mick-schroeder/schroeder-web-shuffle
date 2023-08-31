import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import SiteLayout from "../components/site-layout";
import { SEO } from "../components/seo";


const shortcodes = { Link };

export default function MDXPageTemplate({ data, children }) {
  return (
    <SiteLayout>
    <SEO title={`Web Shuffle - ${data.mdx.frontmatter.title}`} />

      <div className="mx-auto prose dark:prose-invert mt-12 p-4">
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
    </SiteLayout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
