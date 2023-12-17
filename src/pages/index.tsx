import * as React from "react";
import type { PageProps } from "gatsby";
import { Link } from "gatsby";
import CardsSources from "../components/sources-gallery";
import RedirectButton from "../components/redirect-button";
import HomePage from "../components/next-site-up";
import SiteLayout from "../components/site-layout";
import { SEO } from "../components/seo";
import FeaturesSection from "../components/features";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <SiteLayout>
      <div className="grid md:grid-cols-2 gap-2">
        <section className="">
          <div className="py-8 px-4 mx-auto sm:py-8 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-700 dark:text-white">
                Welcome to{" "}
                <span className="text-transparent tracking-tighter bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500">
                  Web Shuffle
                </span>{" "}
                the AI curated shuffle button for the web.
              </h2>
              <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
                Simply click the Web Shuffle button and let us take you to the
                best and most influential websites.
              </p>
              <RedirectButton />
            </div>
          </div>
        </section>
        <section>
          <HomePage />
        </section>{" "}
      </div>

      <section>
        <div className="mx-auto max-w-screen-xl text-center mt-2">
          <div
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-sm font-medium ml-4">
              Drag to your Bookmarks Bar
            </span>
            <svg
              className=" animate-pulse ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-xs bg-blue-600 rounded-full font-bold text-white px-4 py-1.5 ml-3">
              <a href="/redirect" target="_blank" rel="noopener">
                Web Shuffle
              </a>
            </span>
          </div>
        </div>
      </section>

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
          <h3 className="text-2xl font-bold dark:text-white py-4">
            Top Sources
          </h3>
          <CardsSources sort="rating" />
   
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

      <FeaturesSection />
    </SiteLayout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
