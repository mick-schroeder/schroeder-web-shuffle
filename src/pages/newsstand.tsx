import React from "react";
import SiteLayout from "../components/site-layout";
import { SEO } from "../components/seo";
import SourcesGallery from "../components/sources-gallery";
import { useStaticQuery, graphql } from "gatsby";

const NewstandPage = () => {
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
        <section>
          <div className="">
            <div className=" text-zinc-500 sm:text-lg dark:text-zinc-400">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-zinc-900 dark:text-white pb-3 border-b border-zinc-100 dark:border-zinc-600">
                {data.site.siteMetadata.name}'s Digital Newsstand
              </h2>
              <p className="mb-4 font-normal md:max-w-screen-md md:max-w-screen-md">
                Explore the online world with {data.site.siteMetadata.name}'s
                Digital Newsstand. Scroll and browse the front pages of the
                internet’s most influential websites, just like scanning through
                publications at a real-life newsstand. Experience the breadth of
                information, styles, and perspectives, all curated for an
                enriching and diverse reading journey.
              </p>
            </div>
          </div>
        </section>
        <div className="mb-4 border-zinc-200 dark:border-zinc-700"></div>
        <div className="py-8 lg:max-w-screen-xl lg:py-8 ">
          <SourcesGallery />
        </div>
      </div>
    </SiteLayout>
  );
};

export default NewstandPage;
export const Head = () => (
  <SEO title="Web Shuffle - Digital Newsstand - Curated front pages of the top websites on the internet." />
);
