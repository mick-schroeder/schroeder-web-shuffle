import React from "react";
import SiteLayout from "../components/site-layout";
import { SEO } from "../components/seo";
import CategoriesTable from "../components/categories-table";
import { useStaticQuery, graphql } from "gatsby";

const WebsitesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);
  return (
    <SiteLayout>
            <div className="sm:ml-6">

      <section className="lg:max-w-screen-xl">
        <div className="">
          <div className="text-zinc-500 sm:text-lg dark:text-zinc-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-zinc-900 dark:text-white pb-3 border-b border-zinc-100 dark:border-zinc-600">
              {data.site.siteMetadata.name}'s Categories
            </h2>
            <h3 className="mb-4 text-2xl font-bold text-zinc-900  dark:text-zinc-400">
              Shuffle based on category
            </h3>

            <p className="mb-4 font-normal ">
              Choose a category below to shuffle the web by your interests.
            </p>
          </div>
        </div>
      </section>
      <div className="mb-4 border-zinc-200 dark:border-zinc-700"></div>
      <div className="my-28 mx-8">
        <CategoriesTable />
      </div>
      </div>

    </SiteLayout>
  );
};

export default WebsitesPage;
export const Head = () => (
  <SEO title="Web Shuffle - Categories" />
);
