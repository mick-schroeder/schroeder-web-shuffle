import React from "react";
import SiteLayout from "../components/site-layout";
import { SEO } from "../components/seo";
import SourcesGallery from "../components/sources-gallery";
import SourcesTable from "../components/sources-table";

const WebsitesPage = () => {
  return (
    <SiteLayout>
      <section className="sm:ml-6 md:max-w-screen-md">
        <div className="">
          <div className=" text-zinc-500 sm:text-lg dark:text-zinc-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-zinc-900 dark:text-white pb-3 border-b border-zinc-100 dark:border-zinc-600">
              Curated Sources
            </h2>
            <h3 className="mb-4 text-2xl font-bold text-zinc-900  dark:text-zinc-400">
              List of the best and most influential websites on the internet
            </h3>

            <p className="mb-4 font-normal ">
              Discover our curated list of the internet’s top-tier websites,
              each vetted for credibility and impact. From global news giants to
              internet memes, our Sources page offers a transparent view into
              the diverse range of picks.
            </p>
          </div>
        </div>
      </section>
      <div className="ml-6">
        <SourcesTable />
      </div>
    </SiteLayout>
  );
};

export default WebsitesPage;
export const Head = () => (
  <SEO title="Web Shuffle - Sources - Curated list of the internet’s top-tier websites." />
);
