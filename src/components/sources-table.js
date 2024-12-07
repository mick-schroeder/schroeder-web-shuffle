// WebsitesTable.js
import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const SourcesTable = () => {
  const data = useStaticQuery(graphql`
    query {
      allSourcesJson(sort: { slug: ASC }) {
        nodes {
          name
          url
          category
          score
          slug
          color
        }
      }
    }
  `);

  const websites = data.allSourcesJson.nodes;

  return (
    <div className="relative overflow-x-auto">
      <table className="table-auto w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
        <thead className="text-xs text-zinc-700 bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              URL
            </th>
          </tr>
        </thead>
        <tbody>
          {websites.map((website) => (
            <tr
              key={website.name}
              className="bg-white hover:bg-zinc-100 hover:dark:bg-zinc-700 border-b dark:bg-zinc-800 dark:border-zinc-700"
            >
              <td className="px-6 py-4 font-medium text-zinc-900 whitespace-nowrap dark:text-white">
                <Link to={`/sources/${website.slug}`}>
                  <span className="flex items-center text-sm font-medium text-zinc-900 dark:text-white">
                    {website.name}
                  </span>
                </Link>
              </td>
              <td className="px-6 py-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {website.category}
                </span>
              </td>
              <td className="px-6 py-4">
                {" "}
                <a
                  href={website.url}
                  target=""
                  className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {website.url.length > 32
                    ? website.url.slice(0, 32) + "..."
                    : website.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SourcesTable;
