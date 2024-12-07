import React, { useEffect } from "react";
import SiteLayout from "../components/site-layout";
import { graphql, Link, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";

export const query = graphql`
  query GetSourceBySlug($slug: String!) {
    sourcesJson(slug: { eq: $slug }) {
      name
      url
      category
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
      <SEO
        title={`Web Shuffle - ${source.name}`}
        description={source.description}
      />
      <section className="ml-6">
        <div className="p-4 mx-auto max-w-screen-xl">
          <nav className="flex pt-2 pb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 :space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-zinc-700 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-white"
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
                    className="w-3 h-3 text-zinc-400 mx-1"
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
                    className="ml-1 text-sm font-medium text-zinc-700 hover:text-blue-600 md:ml-2 dark:text-zinc-400 dark:hover:text-white"
                  >
                    Sources
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-zinc-400 mx-1"
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
                  <span className="ml-1 text-sm font-medium text-zinc-500 md:ml-2 dark:text-zinc-400">
                    {source.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="lg:flex justify-between items-center gap-2">
            <Link
              to={prevSlug ? `/sources/${prevSlug}` : "#"}
              onClick={(e) => {
                if (!prevSlug) e.preventDefault();
              }}
              className={`flex items-center justify-center px-4 mb-4 lg:mb-0 h-10 mr-3 text-base font-medium ${
                prevSlug
                  ? "text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                  : "text-zinc-300 bg-zinc-200 border border-zinc-300 cursor-not-allowed dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-500"
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
            <div className="sm:flex mb-4 lg:mb-0 items-justified bg-white rounded-lg shadow  dark:bg-zinc-800 dark:border-zinc-700 border">
              <a href={source.url}>
                <GatsbyImage
                  className="h-full max-w-sm sm:rounded-none sm:rounded-l-lg"
                  image={image}
                  alt={source.name}
                  placeholder="blurred"
                />
              </a>
              <div className="p-4">
                <h1 className="text-2xl md:text-3xl font-bold mb-8 text-zinc-900 dark:text-white">
                  {source.name}
                </h1>
                <dl>
                  <dt className="mb-2 font-semibold leading-none text-zinc-900 dark:text-white">
                    Tag
                  </dt>
                  <dd className="mb-4 font-normal md:max-w-screen-md text-zinc-500 sm:mb-5 dark:text-zinc-400">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      {source.category}
                    </span>
                  </dd>
                </dl>

                <dl>
                  <dt className="mb-2 font-semibold leading-none text-zinc-900 dark:text-white">
                    Description
                  </dt>
                  <dd className="mb-4 font-normal text-zinc-500 sm:mb-5 dark:text-zinc-400">
                    <blockquote className="p-4 my-4 border-l-4 border-zinc-300 dark:border-zinc-700">
                      <p className="text-md italic font-medium leading-relaxed text-zinc-900 dark:text-white max-w-sm">
                        "{source.description}"
                      </p>
                    </blockquote>
                  </dd>
                </dl>
                <dl>
                  <dt className="mb-2 font-semibold leading-none text-zinc-900 dark:text-white">
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
                      <span className="truncate mr-2 max-w-sm">
                        {source.url}
                      </span>
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
                  ? "text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white"
                  : "text-zinc-300 bg-zinc-200 border border-zinc-300 cursor-not-allowed dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-500"
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
        </div>
      </section>
    </SiteLayout>
  );
};

export default CategoryTemplate;
