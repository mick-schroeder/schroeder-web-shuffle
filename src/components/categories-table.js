// WebsitesTable.js
import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { useNextSiteContext } from "./next-site-context";

const CategoriesTable = () => {
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
    }
  `);

  const categories = data.categories.nodes;
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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {categories.map((website) => (
        <a
          //href={website.slug}
          onClick={(event) => handleClick(event, website.name)}
          target=""
          className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline p-3"
        >
          <span className="bg-blue-100 text-blue-800 font-bold mr-2 px-5 py-5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {website.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default CategoriesTable;
