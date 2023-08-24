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
      <div className="grid lg:grid-cols-2 gap-2 max-w-screen-xl mb-8">
        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-slate-700 dark:text-white">
                Welcome to
                <br />
                <span className="text-transparent uppercase tracking-tighter bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500">
                  Web Shuffle
                </span>
                <br />
                the AI curated shuffle button for the web.
              </h2>
              <p className="mb-6 text-slate-500 dark:text-slate-400 md:text-lg">
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
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
          <h2 className="text-2xl font-extrabold dark:text-white">
            Digital Newsstand:
            <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
              Today's Front Pages
            </small>
            <span className="bg-red-100 text-red-800  text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-2">
              Live
            </span>
          </h2>

          <p className="my-4 text-gray-500 dark:text-gray-400">
            Today's front pages, all in one place. Get a firsthand look at the
            internet's virtual newsstand where you can instantly browse the
            daily front pages of leading websites.{" "}
          </p>
          <CardsSources limit={6} />

          <p className="text-gray-500 dark:text-gray-400 py-6  text-center">
            <Link
              to="/sources"
              className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              View all of our sources
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
