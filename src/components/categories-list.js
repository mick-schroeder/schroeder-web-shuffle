import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useNextSiteContext } from "./next-site-context";

const CategoriesList = () => {
  // Combine both queries into one `useStaticQuery` call
  const data = useStaticQuery(graphql`
    query {
      categories: allCategoriesJson {
        nodes {
          name
          slug
          icon
          color
        }
      }
      sources: allSourcesJson {
        nodes {
          name
          url
          category
          description
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
        }
      }
    }
  `);

  const categories = data.categories.nodes;
  const sources = data.sources.nodes;
  const {
    nextSite,
    nextSiteName,
    //nextSiteSlug,
    refreshNextSite,
    nextSiteDescription,
    // nextSiteImage,
  } = useNextSiteContext();

  const handleClick = (event, websiteName, url) => {
    event.preventDefault();
    refreshNextSite(websiteName);
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm md:text-xs">
      <div className="grid content-start  ">
        {categories
          .filter((category) => category.name === "News")
          .map((category) => (
            <div key={category.slug} className="">
              {/* Category Header */}
              <h2 className="text-gray-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-2">
              <a
              onClick={(event) => handleClick(event, category.name)}
              target=""
              >
                {category.name.toUpperCase()}
                </a></h2>
              {/* Filter sources by the current category and list them */}
              {sources
                .filter((source) => source.category === category.name)
                .map((source) => (
                  <a
                    onClick={(event) =>
                      handleClick(event, source.name, source.url)
                    }
                    className="block text-blue-600 dark:text-blue-400 underline "
                    role="button"
                    aria-label={`Open ${source.name}`}
                  >
                    {source.name.toUpperCase()}
                  </a>
                ))}
            </div>
          ))}
      </div>

      <div className="grid content-start">
        {categories
          .filter(
            (category) =>
              category.name !== "News" && category.name !== "Sponsors",
          ) // Exclude News and Sponsor
          .map((category) => (
            <div key={category.slug} className="">
              {/* Category Header */}
              <h2 className="text-gray-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-2">
                {category.name.toUpperCase()}
              </h2>
              {/* Filter sources by the current category and list them */}
              {sources
                .filter((source) => source.category === category.name)
                .map((source) => (
                  <p key={source.slug} className="">
                    <a
                      onClick={(event) =>
                        handleClick(event, source.name, source.url)
                      }
                      className="block text-blue-600 dark:text-blue-400 underline"
                      role="button"
                      aria-label={`Open ${source.name}`}
                    >
                      {source.name.toUpperCase()}
                    </a>
                    {/*                   <p className="text-sm text-gray-600 dark:text-gray-50">{source.description}</p>
                     */}{" "}
                  </p>
                ))}
            </div>
          ))}
      </div>

      <div className="">
        {categories
          .filter((category) => category.name === "Sponsors")
          .map((category) => (
            <div key={category.slug} className="">
              {/* Category Header */}
              <h2 className="text-gray-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-2">
                {category.name.toUpperCase()}
              </h2>
              {/* Filter sources by the current category and list them */}
              {sources
                .filter((source) => source.category === category.name)
                .map((source) => (
                  <p key={source.slug} className="">
                    <a
                      onClick={(event) =>
                        handleClick(event, source.name, source.url)
                      }
                      className="block text-blue-600 dark:text-blue-400 underline"
                      role="button"
                      aria-label={`Open ${source.name}`}
                    >
                      {source.name.toUpperCase()}
                    </a>
                    {/*                   <p className="text-sm text-gray-600 dark:text-gray-50">{source.description}</p>
                     */}{" "}
                  </p>
                ))}
            </div>
          ))}

        <div>
        <h2 className="text-gray-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-2">
        BOOKMARK
          </h2>
          <div
            className="inline-flex justify-between items-center py-1 px-1 pr-4 m-2 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs font-medium ml-4">
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
            <span className="bg-blue-600 rounded-full text-xs font-bold text-white px-4 py-1.5 ml-3">
              <a href="/redirect" target="_blank" rel="noopener">
                Web Shuffle
              </a>
            </span>
          </div>
        </div>

        <div className="">
        <h2 className="text-gray-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-2">
        OPEN SOURCE
          </h2>
          <p className="mb-2 leading-relaxed text-gray-700 dark:text-gray-400">
            This program is free software: you can redistribute it and/or modify
            it under the terms of the
            <a
              href="https://www.gnu.org/licenses/agpl.html"
              rel="external"
              className="underline"
            >
              &nbsp;GNU Affero General Public License
            </a>
            .
          </p>
          <p>
            <a className="block text-blue-600 dark:text-blue-400 underline">
              SOURCE CODE ON GITHUB
            </a>
          </p>
          <h2 className="text-sm font-black tracking-wide mt-2 mb-2 text-black dark:text-white">
            ABOUT
          </h2>

          <p>
            <a
              href="/about"
              className="block text-blue-600 dark:text-blue-400 underline "
            >
              ABOUT WEB SHUFFLE
            </a>
          </p>
          <p>
            <a
              href="/sources"
              className="block text-blue-600 dark:text-blue-400 underline "
            >
              SOURCES
            </a>
          </p>
          <p>
            <a
              href="/newsstand"
              className="block text-blue-600 dark:text-blue-400 underline "
            >
              DIGITAL NEWSSTAND
            </a>
          </p>
          <p>
            <a
              href="mailto:WEBSHUFFLE@MICKSCHROEDER.COM"
              className="block text-blue-600 dark:text-blue-400 underline "
            >
              WEBSHUFFLE@MICKSCHROEDER.COM
            </a>
          </p>
          <p>
            <a
              href="/terms-privacy"
              className="block text-blue-600 dark:text-blue-400 underline "
            >
              TERMS & PRIVACY POLICY
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
