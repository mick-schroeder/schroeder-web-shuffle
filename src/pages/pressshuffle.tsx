import React from "react";
import SiteLayout from "../components/site-layout";
import { SEO } from "../components/seo";
import CategoriesList from "../components/categories-list";
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
        <section className="md:max-w-screen-md">
          <div className="py-8 px-4 mx-auto lg:py-8 lg:px-6">
            <div className=" text-zinc-500 sm:text-lg dark:text-zinc-400">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-zinc-900 dark:text-white">
                Web Shuffle
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
        <div className="m-4"></div>
        <section className="">
          <div className="py-8 px-4 mx-auto lg:py-8 lg:px-6">
            <CategoriesList />
          </div>
        </section>
      </div>
    </SiteLayout>
  );
};

export default WebsitesPage;
export const Head = () => (
  <SEO title="Web Shuffle - Sources - Curated list of the internet’s top-tier websites." />
);
