import * as React from "react";
import type { PageProps } from "gatsby";
import { Link } from "gatsby";
import CardsSources from "../components/sources-gallery";
import RedirectButton from "../components/redirect-button";
import SiteLayout from "../components/site-layout";
import Hero from "../components/hero";

import { SEO } from "../components/seo";
import FeaturesSection from "../components/features";
import CategoriesList from "../components/categories-list";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <SiteLayout>
      <div className="lg:max-w-screen-lg">
        <section className="px-4">
          <Hero />
        </section>

        {
          <section className="mt-10 lg:max-w-screen-lg">
            <div className="py-8 px-4 lg:py-0 lg:px-6">
              <CategoriesList />
            </div>
          </section>
        }
        {
          <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
              <h2 className="text-2xl font-extrabold dark:text-white">
                Digital Newsstand:
                <small className="ml-2 font-semibold text-zinc-500 dark:text-zinc-400">
                  Today's Front Pages
                </small>
                <span className="  bg-red-100 text-red-800  text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-2">
                  Live
                </span>
              </h2>

              <p className="my-4 text-zinc-500 dark:text-zinc-400">
                Today's front pages, all in one place. Get a firsthand look at
                the internet's virtual newsstand where you can instantly browse
                the daily front pages of leading websites.{" "}
              </p>

              <CardsSources limit="3" sort="rating" />

              <div className="text-center mt-8">
                {" "}
                <RedirectButton />
              </div>

              <p className="text-zinc-500 dark:text-zinc-400 py-6  text-center">
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
      </div>
    </SiteLayout>
  );
};

export default IndexPage;

export const Head = () => <SEO />;
