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
          show
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
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => (
        <a
          href={category.slug}
          onClick={(event) => handleClick(event, category.name)}
          target=""
          className="flex items-center rounded-lg border border-zinc-200 bg-white px-4 py-2 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
        >
        <span className="font-medium text-zinc-900 dark:text-white">            
        {category.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default CategoriesTable;
