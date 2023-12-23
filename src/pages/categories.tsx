import React from "react";
import SiteLayout from "../components/site-layout";
import { SEO } from "../components/seo";
import CategoriesTable from "../components/categories-table";

const WebsitesPage = () => {
  return (
    <SiteLayout>
      <section className="md:max-w-screen-md">
        <div className="py-8 px-4 mx-auto lg:py-8 lg:px-6">
          <div className=" text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Web Shuffle's Categories
            </h2>
            <h3 className="mb-4 text-2xl font-bold text-gray-900  dark:text-gray-400">
              Shuffle based on category
            </h3>

            <p className="mb-4 font-normal ">
              Choose a category below to shuffle the web by your interests.
            </p>
          </div>
        </div>
      </section>
      <div className="mb-4 border-gray-200 dark:border-gray-700"></div>
      <div>
        <CategoriesTable />
      </div>
    </SiteLayout>
  );
};

export default WebsitesPage;
export const Head = () => (
  <SEO title="Web Shuffle - Sources - AI Curated list of the internet’s top-tier websites." />
);
