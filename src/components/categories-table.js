// WebsitesTable.js
import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import StarRating from "./star-rating";

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

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {categories.map((website) => (
        <a
          href={website.slug}
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
