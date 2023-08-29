import React from "react";
import SiteLayout from "../components/site-layout";
import { SEO } from "../components/seo";
import SourcesGallery from "../components/sources-gallery";
import SourcesTable from "../components/sources-table";

const WebsitesPage = () => {
  return (
    <SiteLayout>
      <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
  <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Web Shuffle's AI Curated Sources</h2>
    <h3 className="mb-4 text-2xl font-bold text-gray-900  dark:text-gray-400">Best and most influential websites on the internet</h3>

    <p className="mb-4 font-light">
    Discover the backbone of Web Shuffle – our AI-curated list of the internet’s top-tier websites, each vetted for credibility and impact. 
    From global news giants to internet memes, our Sources page offers a transparent view into the diverse landscape our AI recommends.
    </p>
</div>
  </div>
</section>
      <div className="mb-4 border-gray-200 dark:border-gray-700">
       
      </div>
      <div>
        <SourcesTable />
      </div>
    </SiteLayout>
  );
};

export default WebsitesPage;
export const Head = () => (
  <SEO title="Web Shuffle - Sources - AI Curated list of the internet’s top-tier websites." />
)