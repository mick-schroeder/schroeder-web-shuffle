import React from "react";
import SiteLayout from "../components/site-layout";
import { SEO } from "../components/seo";
import SourcesGallery from "../components/sources-gallery";

const NewstandPage = () => {
  return (
    <SiteLayout>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Web Shuffle's Digital Newsstand
            </h2>
            <p className="mb-4 font-normal md:max-w-screen-md md:max-w-screen-md">
              Explore the online world with Web Shuffle's Digital Newsstand.
              Scroll and browse the front pages of the internet’s most
              influential websites, just like scanning through publications at a
              real-life newsstand. Experience the breadth of information,
              styles, and perspectives, all curated for an enriching and diverse
              reading journey.
            </p>
          </div>
        </div>
      </section>
      <div className="mb-4 border-gray-200 dark:border-gray-700"></div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <SourcesGallery />
      </div>
    </SiteLayout>
  );
};

export default NewstandPage;
export const Head = () => (
  <SEO title="Web Shuffle - Digital Newsstand - Curated front pages of the top websites on the internet." />
);
