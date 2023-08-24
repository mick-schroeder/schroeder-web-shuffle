import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import SiteLayout from "../components/site-layout";

const shortcodes = { Link };

export default function MDXPageTemplate({ data, children }) {
  return (
    <SiteLayout>
      <div className="mx-auto prose dark:prose-invert">
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
