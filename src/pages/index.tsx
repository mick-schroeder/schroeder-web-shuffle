import * as React from "react";
import type { PageProps } from "gatsby";
import { Link } from "gatsby";
import CardsSources from "../components/sources-gallery";
import RedirectButton from "../components/redirect-button";
import SiteLayout from "../components/site-layout";
import { SEO } from "../components/seo";
import FeaturesSection from "../components/features";
import CategoriesList from "../components/categories-list";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <SiteLayout>
      <div className="">
        <section className="">
          <div className="py-4 px-4 mx-auto sm:py-8 lg:px-6 ">
            <div className="mx-auto max-w-screen-md text-center">
              <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
              Web Shuffle is your gateway to discovering the best and most influential websites. Simply click the Web Shuffle button, and let us take you to the best sites on the internet.
              </p>
              <RedirectButton />
            </div>
          </div>
        </section>
      </div>
      {
   <section className="">
   <div className="py-8 px-4 mx-auto lg:py-8 lg:px-6">
             <CategoriesList />
             </div>
   </section>
}
  {
      
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
          <h2 className="text-2xl font-extrabold dark:text-white">
            Digital Newsstand:
            <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
              Today's Front Pages
            </small>
            <span className="  bg-red-100 text-red-800  text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-2">
              Live
            </span>
          </h2>

          <p className="my-4 text-gray-500 dark:text-gray-400">
            Today's front pages, all in one place. Get a firsthand look at the
            internet's virtual newsstand where you can instantly browse the
            daily front pages of leading websites.{" "}
          </p>
             
          <CardsSources limit="3" sort="rating" />           

          <div className="text-center mt-8">
            {" "}
            <RedirectButton />
          </div>

          <p className="text-gray-500 dark:text-gray-400 py-6  text-center">
            <Link
              to="/newsstand"
              className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Browse all of the sources in our Digital Newsstand
              <svg
                className="w-4 h-4 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </p>
        </div>
      </section>
}

    </SiteLayout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
