import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useNextSiteContext } from "./next-site-context";
import WebShuffleIcon from "../images/web-shuffle.svg";
import Ad from "../components/ad";

const CategoriesList = () => {
  // Combine both queries into one `useStaticQuery` call
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          author
          authorUrl
          foundingYear
          description
          tagLine
        }
      }
      categories: allCategoriesJson {
        nodes {
          name
          slug
          icon
          show
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
                <h6 className="inline-flex text-zinc-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-4 hover:underline cursor-grab uppercase">
                  {category.name}
                  <img
                    src={WebShuffleIcon}
                    className="w-4 h-4 ml-2 dark:opacity-50 hover:opacity-70"
                    alt="Website Icon"
                  />
                </h6>
              </a>
              {/* Filter sources by the current category and list them */}
              {sources
                .filter((source) => source.category === category.name)
                .map((source) => (
                  <a
                    href={source.url}
                    target="_blank"
                    className="block min-h-6 lg:min-h-6 text-blue-600 font-semibold dark:text-blue-400 hover:text-blue-500 hover:dark:text-blue-300 uppercase"
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
                <h6 className="inline-flex text-zinc-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-4 hover:underline cursor-grab uppercase">
                  {category.name}
                  <img
                    src={WebShuffleIcon}
                    className="w-4 h-4 ml-2 opacity-50 hover:opacity-70"
                    alt="Website Icon"
                  />
                </h6>
              </a>
              {/* Filter sources by the current category and list them */}
              {sources
                .filter((source) => source.category === category.name)
                .map((source) => (
                  <p key={source.slug} className="">
                    <a
                      href={source.url}
                      target="_blank"
                      className="block min-h-6 lg:min-h-6 text-blue-600 font-semibold dark:text-blue-400 hover:text-blue-500 hover:dark:text-blue-300 uppercase"
                      role="button"
                      aria-label={`Open ${source.name}`}
                    >
                      {source.name}
                    </a>
                    {/* <p className="text-sm text-zinc-600 dark:text-zinc-50">{source.description}</p>
                     */}{" "}
                  </p>
                ))}
            </div>
          ))}
      </div>

      <div className="">
        <h6 className="inline-flex text-zinc-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-4 hover:underline cursor-grab uppercase">
          SPONSORS
        </h6>
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
                      className="block min-h-6 lg:min-h-6 text-blue-600 font-semibold dark:text-blue-400 hover:text-blue-500 hover:dark:text-blue-300 uppercase"
                      role="button"
                      aria-label={`Open ${source.name}`}
                    >
                      {source.name.toUpperCase()}
                    </a>
                    {/*                   <p className="text-sm text-zinc-600 dark:text-zinc-50">{source.description}</p>
                     */}{" "}
                  </p>
                ))}
            </div>
          ))}

        <div>
          <h6 className="inline-flex text-zinc-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-4 hover:underline cursor-grab uppercase">
            Bookmark
          </h6>
          <p className="mb-2 leading-relaxed text-zinc-700 dark:text-zinc-400">
            Drag to your Bookmarks Bar
            <span className="bg-blue-600 rounded-full text-xs font-bold text-white px-4 py-1.5 my-4 ml-4">
              <a href="/redirect" target="_blank" rel="noopener">
                {data.site.siteMetadata.name}
              </a>
            </span>
          </p>
          <h6 className="inline-flex text-zinc-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-4 hover:underline cursor-grab uppercase">
            Browser Extension
          </h6>

          <p>
            <a
              href="https://chromewebstore.google.com/detail/web-shuffle/lgokgkophalfnnapghjjckmeoboepfdj"
              className="block min-h-6 lg:min-h-6 text-blue-600 font-semibold dark:text-blue-400 hover:text-blue-500 hover:dark:text-blue-300 uppercase"
            >
              Google Chrome Web Store
            </a>
          </p>
        </div>

        <div className="">
          <h6 className="inline-flex text-zinc-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-4 hover:underline cursor-grab uppercase">
            OPEN SOURCE
          </h6>
          <p className="mb-2 leading-relaxed text-zinc-700 dark:text-zinc-400">
            This program is free software: you can redistribute it and/or modify
            it under the terms of the&nbsp;
            <a
              href="https://www.gnu.org/licenses/agpl.html"
              rel="external"
              className="min-h-6 lg:min-h-6 text-blue-600 font-semibold dark:text-blue-400 hover:text-blue-500 hover:dark:text-blue-300 uppercase"
            >
              GNU Affero General Public License
            </a>
            .
          </p>
          <p>
            <a
              href="https://github.com/mick-schroeder/schroeder-Web Shuffle"
              className="block min-h-6 lg:min-h-6 text-blue-600 font-semibold dark:text-blue-400 hover:text-blue-500 hover:dark:text-blue-300 uppercase"
            >
              SOURCE CODE ON GITHUB
            </a>
          </p>
          <h6 className="inline-flex text-zinc-900 dark:text-white text-sm font-black tracking-wide mt-2 mb-4 hover:underline cursor-grab uppercase">
            ABOUT
          </h6>

          <p>
            <a
              href="/about"
              className="block min-h-6 lg:min-h-6 text-blue-600 font-semibold dark:text-blue-400 hover:text-blue-500 hover:dark:text-blue-300 uppercase"
            >
              ABOUT
            </a>
          </p>
          <p>
            <a
              href="/sources"
              className="block min-h-6 lg:min-h-6 text-blue-600 font-semibold dark:text-blue-400 hover:text-blue-500 hover:dark:text-blue-300 uppercase"
            >
              SOURCES
            </a>
          </p>
          <p>
            <a
              href="/newsstand"
              className="block min-h-6 lg:min-h-6 text-blue-600 font-semibold dark:text-blue-400 hover:text-blue-500 hover:dark:text-blue-300 uppercase"
            >
              DIGITAL NEWSSTAND
            </a>
          </p>
          <p>
            <a
              href="mailto:email@mickschroeder.com"
              className="block min-h-6 lg:min-h-6 text-blue-600 font-semibold dark:text-blue-400 hover:text-blue-500 hover:dark:text-blue-300 uppercase"
            >
              EMAIL@MICKSCHROEDER.COM
            </a>
          </p>
          <p>
            <a
              href="/terms-privacy"
              className="block min-h-6 lg:min-h-6 text-blue-600 font-semibold dark:text-blue-400 hover:text-blue-500 hover:dark:text-blue-300 uppercase"
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
