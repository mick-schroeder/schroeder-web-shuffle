import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import StarRating from "./star-rating";

const SourcesGallery = ({ limit }) => {
  const data = useStaticQuery(graphql`
    query {
      allSourcesJson {
        edges {
          node {
            color
            name
            score
            tag
            url
            slug
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `);


const shuffledSources = limit ? data.allSourcesJson.edges.sort((a, b) => 0.5 - Math.random()) : data.allSourcesJson.edges;

const sources = limit ? shuffledSources.slice(0, limit) : shuffledSources;

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {sources.map(({ node }) => {
        const image = getImage(node.image);

        return (
          <div
            key={node.name}
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
          >
            <Link
              to={`/sources/${node.slug}`}
              aria-label={`View ${node.name}`}
            >
              <GatsbyImage image={image} alt={node.name} />
            </Link>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <StarRating score={node.score} />

                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {node.tag}
                </span>
              </div>

              <Link to={node.url} className="block mb-1">
                <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white hover:text-blue-600">
                  {node.name}
                </h3>
              </Link>

              <Link
                to={node.url}
                className="text-xs font-semibold inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="truncate mr-2">
                  {node.url.length > 30
                    ? node.url.slice(0, 30) + "..."
                    : node.url}
                </p>

                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SourcesGallery;
