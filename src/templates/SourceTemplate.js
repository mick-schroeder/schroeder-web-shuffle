import React, { useEffect } from "react";
import SiteLayout from "../components/site-layout";
import { graphql, Link, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import StarRating from "../components/star-rating";
import { SEO } from "../components/seo";

export const query = graphql`
  query GetSourceBySlug($slug: String!) {
    sourcesJson(slug: { eq: $slug }) {
      name
      url
      tag
      score
      color
      description
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

const SourceTemplate = ({ data, pageContext }) => {
  const source = data.sourcesJson;
  const image = getImage(source.image);
  const { prevSlug, nextSlug } = pageContext;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 37 && prevSlug) {
        // 37 is the key code for the left arrow key
        navigate(`/sources/${prevSlug}`);
      } else if (e.keyCode === 39 && nextSlug) {
        // 39 is the key code for the right arrow key
        navigate(`/sources/${nextSlug}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevSlug, nextSlug]);

  return (
    <SiteLayout>
    <SEO title={`Web Shuffle - ${source.name}`} description={source.description} />

      <nav className="flex pb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to="/sources"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Sources
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                {source.name}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="md:flex justify-between items-center gap-4">
      <Link
          to={prevSlug ? `/sources/${prevSlug}` : "#"}
          onClick={(e) => {
            if (!prevSlug) e.preventDefault();
          }}
          className={`flex items-center justify-center px-4 mb-4 md:mb-0 h-10 mr-3 text-base font-medium ${
            prevSlug
              ? "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              : "text-gray-300 bg-gray-200 border border-gray-300 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:text-gray-500"
          }`}
        >
          <svg
            className="w-3.5 h-3.5 mr-2"
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
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </Link>
        <div className="w-full mb-4 md:mb-0 items-justified bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
          <a href={source.url}>
            <GatsbyImage
              className="w-full md:w-80 rounded-lg sm:rounded-none sm:rounded-l-lg"
              image={image}
              alt={source.name}
              placeholder="blurred"
            />
          </a>
          <div className="p-5">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {source.name}
            </h1>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Tag
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  {source.tag}
                </span>
              </dd>
            </dl>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              AI Rating
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                <StarRating score={source.score} />
              </dd>
            </dl>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                Description
              </dt>
              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                {source.description}
              </dd>
            </dl>
            <dl>
              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                URL
              </dt>
              <dd className="mb-4">
                {" "}
                <a
                  href={source.url}
                  className="font-semibold inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="truncate mr-2">{source.url}</span>
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
                </a>
              </dd>
            </dl>
          </div>
        </div>

        <Link
          to={nextSlug ? `/sources/${nextSlug}` : "#"}
          onClick={(e) => {
            if (!nextSlug) e.preventDefault();
          }}
          className={`flex items-center justify-center px-4 h-10 text-base font-medium ${
            nextSlug
              ? "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              : "text-gray-300 bg-gray-200 border border-gray-300 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:text-gray-500"
          }`}
        >
          Next
          <svg
            className="w-3.5 h-3.5 ml-2"
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
      </div>
    </SiteLayout>
  );
};

export default SourceTemplate;
