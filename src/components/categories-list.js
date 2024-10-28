import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useNextSiteContext } from "./next-site-context";
import WebShuffleIcon from "../images/web-shuffle.svg";
import Ad from "../components/ad";

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

  const handleClick = (event, websiteName) => {
    event.preventDefault();
    refreshNextSite(websiteName);
    window.open(nextSite, "_blank");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm md:text-xs">
      <div className="grid content-start  ">
        {categories
          .filter((category) => category.name === "News")
          .map((category) => (
            <div key={category.slug} className="">
              {/* Category Header */}
              <a
                onClick={(event) => handleClick(event, category.name)}
                target=""
              >
                <h2 className="inline-flex text-gray-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-2 hover:underline cursor-grab">
                  {category.name.toUpperCase()}
                  <img
                    src={WebShuffleIcon}
                    className="w-4 h-4 ml-2 dark:opacity-50 hover:opacity-70"
                    alt="Web Shuffle Icon"
                  />
                </h2>
              </a>
              {/* Filter sources by the current category and list them */}
              {sources
                .filter((source) => source.category === category.name)
                .map((source) => (
                  <a
                    href={source.url}
                    target="_blank"
                    className="block text-blue-600 dark:text-blue-400 underline hover:text-blue-500 hover:dark:text-blue-300"
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
              <a
                onClick={(event) => handleClick(event, category.name)}
                target=""
              >
                <h2 className="inline-flex text-gray-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-2 hover:underline cursor-grab">
                  {category.name.toUpperCase()}
                  <img
                    src={WebShuffleIcon}
                    className="w-4 h-4 ml-2 opacity-50 hover:opacity-70"
                    alt="Web Shuffle Icon"
                  />
                </h2>
              </a>
              {/* Filter sources by the current category and list them */}
              {sources
                .filter((source) => source.category === category.name)
                .map((source) => (
                  <p key={source.slug} className="">
                    <a
                      href={source.url}
                      target="_blank"
                      className="block text-blue-600 dark:text-blue-400 underline hover:text-blue-500 hover:dark:text-blue-300"
                      role="button"
                      aria-label={`Open ${source.name}`}
                    >
                      {source.name.toUpperCase()}
                    </a>
                    {/* <p className="text-sm text-gray-600 dark:text-gray-50">{source.description}</p>
                     */}{" "}
                  </p>
                ))}
            </div>
          ))}
      </div>

      <div className="">
        <h2 className="text-gray-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-2">
          SPONSORS
        </h2>
        <Ad
          adClient="ca-pub-6344797609391119"
          adFormat="auto"
          adSlot="1966196909"
        ></Ad>
        {categories
          .filter((category) => category.name === "Sponsors")
          .map((category) => (
            <div key={category.slug} className="">
              {/* Category Header */}

              {/* Filter sources by the current category and list them */}
              {sources
                .filter((source) => source.category === category.name)
                .map((source) => (
                  <p key={source.slug} className="">
                    <a
                      href={source.url}
                      target="_blank"
                      className="block text-blue-600 dark:text-blue-400 underline hover:text-blue-500 hover:dark:text-blue-300"
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
          <h2 className="text-gray-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-2 uppercase">
            Bookmark
          </h2>
          <p className="mb-2 leading-relaxed text-gray-700 dark:text-gray-400">
            Drag to your Bookmarks Bar
            <span className="bg-blue-600 rounded-full text-xs font-bold text-white px-4 py-1.5 my-2 ml-2">
              <a href="/redirect" target="_blank" rel="noopener">
                Web Shuffle
              </a>
            </span>
          </p>
          <h2 className="text-gray-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-2 uppercase">
            Browser Extension
          </h2>

          <p>
            <a
              href="https://chromewebstore.google.com/detail/web-shuffle/lgokgkophalfnnapghjjckmeoboepfdj"
              className="block text-blue-600 dark:text-blue-400 underline uppercase"
            >
              Google Chrome Web Store
            </a>
          </p>
        </div>

        <div className="">
          <h2 className="text-gray-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-2">
            OPEN SOURCE
          </h2>
          <p className="mb-2 leading-relaxed text-gray-700 dark:text-gray-400">
            This program is free software: you can redistribute it and/or modify
            it under the terms of the&nbsp;
            <a
              href="https://www.gnu.org/licenses/agpl.html"
              rel="external"
              className="underline"
            >
              GNU Affero General Public License
            </a>
            .
          </p>
          <p>
            <a
              href="https://github.com/mick-schroeder/schroeder-web-shuffle"
              className="block text-blue-600 dark:text-blue-400 underline"
            >
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
