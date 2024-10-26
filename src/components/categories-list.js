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
  const { nextSite, refreshNextSite } = useNextSiteContext();

  const handleClick = (event, websiteName, url) => {
    event.preventDefault();
    refreshNextSite(websiteName);
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

    <div className="grid content-start">
    {categories
      .filter((category) => category.name === "News")
      .map((category) => (
      <div key={category.slug} className="">
        {/* Category Header */}
        <h2
        className="text-sm text-gray-900 dark:text-white font-black tracking-wide mb-2"
        >
          {category.name.toUpperCase()}
        </h2>
          {/* Filter sources by the current category and list them */}
          {sources
            .filter((source) => source.category === category.name)
            .map((source) => (
                <a
                  onClick={(event) =>
                    handleClick(event, source.name, source.url)
                  }
                  className="block text-blue-600 dark:text-blue-400 underline text-xs "
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
      .filter((category) => category.name !== "News" && category.name !== "Sponsors") // Exclude News and Sponsor
      .map((category) => (
      <div key={category.slug} className="">
        {/* Category Header */}
        <h2
        className="text-sm text-gray-900 dark:text-white font-black tracking-wide mb-2"
        >
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
                  className="block text-blue-600 dark:text-blue-400 underline text-xs "
                  role="button"
                  aria-label={`Open ${source.name}`}
                >
                  {source.name.toUpperCase()}
                </a>
{/*                   <p className="text-sm text-gray-600 dark:text-gray-50">{source.description}</p>
*/}                </p>
            ))}
        
      </div>
    ))}
    </div>

    <div className="">
    {categories      .filter((category) => category.name === "Sponsors")
      .map((category) => (
      <div key={category.slug} className="">
        {/* Category Header */}
        <h2
        className="text-sm text-gray-900 dark:text-white font-black tracking-wide mb-2"
        >
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
                  className="block text-blue-600 dark:text-blue-400 underline text-xs "
                  role="button"
                  aria-label={`Open ${source.name}`}
                >
                  {source.name.toUpperCase()}
                </a>
{/*                   <p className="text-sm text-gray-600 dark:text-gray-50">{source.description}</p>
*/}                </p>
            ))}
            
            
            </div>
    ))}
   
    <div className="">
      <h2 className="text-sm font-black tracking-wide mt-2 mb-2 text-black dark:text-white">
      OPEN SOURCE
      </h2>
      <p className="mb-2 leading-relaxed text-xs text-gray-700 dark:text-gray-400">
      This program is free software: you can redistribute it and/or
      modify it under the terms of the
      <a
        href="https://www.gnu.org/licenses/agpl.html"
        rel="external"
        className="underline"
      >
        &nbsp;GNU Affero General Public License
      </a>.
    </p>
    <p><a className="block text-blue-600 dark:text-blue-400 underline text-xs ">
      SOURCE CODE ON GITHUB
      </a></p>
      <h2 className="text-sm font-black tracking-wide mt-2 mb-2 text-black dark:text-white">
      CONTACT
      </h2>
      <p><a href="mailto:WEBSHUFFLE@MICKSCHROEDER.COM" className="block text-blue-600 dark:text-blue-400 underline text-xs ">
      WEBSHUFFLE@MICKSCHROEDER.COM
      </a></p>
      <h2 className="text-sm font-black tracking-wide mt-2 mb-2 text-black dark:text-white">
      TERMS & PRIVACY POLICY
      </h2>
      <p><a href="" className="block text-blue-600 dark:text-blue-400 underline text-xs ">
      TERMS & PRIVACY POLICY
      </a></p>
    </div>

    </div>

     
    </div>
  );
};

export default CategoriesList;