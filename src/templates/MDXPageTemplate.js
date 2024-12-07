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
      <div className="ml-6 container">
        <SEO title={`Web Shuffle - ${data.mdx.frontmatter.title}`} />
        <h1 className="mb-4 text-4xl tracking-tight font-bold text-zinc-900 dark:text-white pb-3 border-b border-zinc-100 dark:border-zinc-600">
          {data.mdx.frontmatter.title}
        </h1>
        <div className="prose dark:prose-invert prose-zinc md:prose-lg mx-auto mb-8">
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </div>
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
