//import PropTypes from "prop-types"
import React from "react";
import { Link } from "gatsby";

const Features = () => (
  <section className=" text-gray-500 sm:text-lg dark:text-gray-400 body-font p-4">
  <h2 className="text-2xl font-extrabold dark:text-white text-black">
  Features:
            <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
            Learn everything there is to know about Web Shuffle.
            </small>
          </h2>
    <div className="container max-w-5xl	px-5 py-8 mx-auto flex flex-wrap">
      <div className="flex flex-wrap -m-4">
        <div className="p-2 md:w-1/3 grow md:grow-0">
          <div className="flex h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="tracking-tight text-gray-900 dark:text-white text-lg title-font font-medium">
                Browser Extension
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed font-normal text-gray-700 dark:text-gray-400 pt-3">
                Enhance your web browser with our browser extension. It adds the{" "}
                <a
                  href="/redirect"
                  className="text-blue-600 dark:text-blue-400"
                  target="_blank"
                  rel="noopener"
                >
                  Web Shuffle
                </a>{" "}
                button to your browser's toolbar.
              </p>
              <div className="py-7">
                <a
                  href="https://chrome.google.com/webstore/detail/mick-schroeders-web-shuff/lgokgkophalfnnapghjjckmeoboepfdj"
                  className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-xl text-gray-900 bg-gray-300 hover:bg-gray-400"
                >
                  Chrome Extension
                </a>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-1/3 grow md:grow-0">
          <div className="flex h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="tracking-tight text-gray-900 dark:text-white text-lg title-font font-medium">
                Bookmark{" "}
              </h2>
            </div>
            <p className="leading-relaxed font-normal text-gray-700 dark:text-gray-400 pt-3">
              Bookmark the special "redirect" URL to shuffle from your browser's bookmarks bar.
            </p>
            <div className="flex-grow flex items-center justify-center">
              <p className="leading-relaxed font-normal text-gray-700 dark:text-gray-400 pt-3">
              <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 ml-3"><a href="/redirect" target="_blank"
              rel="noopener">Web Shuffle</a></span>  
              {" "}
                &nbsp;&nbsp;← Drag to your Bookmarks Bar{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-1/3 grow md:grow-0">
          <div className="flex rounded-lg h-full bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="tracking-tight text-gray-900 dark:text-white text-lg title-font font-medium">
                Open Source
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed font-normal text-gray-700 dark:text-gray-400 pt-3">
                This program is free software: you can redistribute it and/or
                modify it under the terms of the
                <a
                  href="https://www.gnu.org/licenses/agpl.html"
                  rel="external"
                  className="underline"
                >
                  &nbsp;GNU Affero General Public License&nbsp;
                </a>                .
              </p>
              <a
                href="https://github.com/mick-schroeder/gatsby-random-website"
                className="mt-3 font-bold text-blue-600 dark:text-blue-400 inline-flex items-cente"
              >
                Source code on Github
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-1/3 grow md:grow-0">
          <div className="flex h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="tracking-tight text-gray-900 dark:text-white text-lg title-font font-medium">
                Channel Surf the Web
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed font-normal text-gray-700 dark:text-gray-400 pt-3">
                Experience the thrill of web surfing by channel surfing the web
                with just one click on the{" "}
                <a
                href="/redirect"
                className="text-blue-600 dark:text-blue-400"
                target="_blank"
                rel="noopener"
              >
                Web Shuffle
              </a>{" "}
                button.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-1/3 grow md:grow-0">
          <div className="flex h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                <svg
                  className="fill-white w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <title>{"share"}</title>
                  <path d="M23 20a5 5 0 0 0-3.89 1.89l-7.31-4.57a4.46 4.46 0 0 0 0-2.64l7.31-4.57A5 5 0 1 0 18 7a4.79 4.79 0 0 0 .2 1.32l-7.31 4.57a5 5 0 1 0 0 6.22l7.31 4.57A4.79 4.79 0 0 0 18 25a5 5 0 1 0 5-5Zm0-16a3 3 0 1 1-3 3 3 3 0 0 1 3-3ZM7 19a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm16 9a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
                  <path
                    data-name="&lt;Transparent Rectangle&gt;"
                    transform="rotate(-90 16 16)"
                    style={{
                      fill: "none",
                    }}
                    d="M0 0h32v32H0z"
                  />
                </svg>
              </div>
              <h2 className="tracking-tight text-gray-900 dark:text-white text-lg title-font font-medium">
                Alternative to StumbleUpon
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed font-normal text-gray-700 dark:text-gray-400 pt-3">
                StumbleUpon and The Useless Web are fun for wasting time. Our
                algorighm is designed to focus on a curated list of the top new
                sites on the web.
              </p>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-1/3 grow md:grow-0">
          <div className="flex h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="tracking-tight text-gray-900 dark:text-white text-lg title-font font-medium">
                AI Editor Curated
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed font-normal text-gray-700 dark:text-gray-400 pt-3">
                The{" "}
                <a
                href="/redirect"
                className="text-blue-600 dark:text-blue-400"
                target="_blank"
                rel="noopener"
              >
                Web Shuffle
              </a>{" "}
                algorithm is backed by an AI editor curated list of the most
                influential news websites on the internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p className="text-gray-500 dark:text-gray-400 py-6  text-center">
    <Link
      to="/about"
      className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
    >
      Learn more about Web Shuffle
      <svg
        className="w-4 h-4 ml-2"
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
  </p>
  </section>
);

export default Features;
