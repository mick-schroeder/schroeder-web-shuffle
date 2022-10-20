import React from "react"
import { Link } from "gatsby"
import AdSense from "react-adsense"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Layout from "../components/layout"
import LinkGrid from "../components/linkGrid"

// left
//import RandomWebsiteIcon from "../images/assets/icon-random-website.svg"
import RandomIcon from "../images/assets/random-solid.svg"
//import SafariIcon from "../images/assets/safari.svg"
//import MicrosoftEdgeIcon from "../images/assets/microsoftedge.svg"
import GoogleChromeIcon from "../images/assets/googlechrome.svg"
//import FirefoxBrowserIcon from "../images/assets/firefoxbrowser.svg"

const IndexPage = () => (
  <Layout>
    <GatsbySeo />
    <div className="text-center">
      <AdSense.Google client="ca-pub-6344797609391119" slot="1966196909" />
    </div>
    <section className="text-slate-500 dark:text-slate-400 body-font">
      <div className="container px-5 pt-7 mx-auto flex flex-wrap items-center">
        <div className="md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-col items-center">
          <h2 className="my-6 md:my-5 text-5xl text-slate-900 dark:text-white opacity-75 font-bold tracking-tight leading-none text-center">
            Take me to a{" "}
            <span className="text-blue-700 dark:text-blue-400">random</span>{" "}
            website, please.
          </h2>
          <p className=" mb-3 mt-3 text-center md:max-w-md leading-relaxed text-base">
            Hit the "Random Website" button and you will be sent to a random
            website from the most influential sites across the web.
          </p>
          <div className="mt-4 mb-4 text-center">
            <Link
              to="/redirect"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-2xl tracking-ex font-bold rounded-md text-white bg-blue-400 hover:bg-blue-700"
              target="_blank"
            >
              Random Website
              <RandomIcon
                alt="Random"
                className="fill-current ml-3"
                width="32"
                height="32"
              />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <LinkGrid />
        </div>
      </div>
    </section>
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3 grow md:grow-0">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                <h2 className="text-white text-lg title-font font-medium">
                  Browser Extension
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base pt-3">
                  You can add the Random Website button to your browser.
                </p>
                <div className="py-7">
                  <a
                    href="https://chrome.google.com/webstore/detail/mick-schroeders-web-shuff/lgokgkophalfnnapghjjckmeoboepfdj"
                    className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-xl text-gray-900 bg-gray-300 hover:bg-gray-400"
                  >
                    <GoogleChromeIcon
                      alt="Random"
                      className="fill-current mr-3"
                      width="24"
                      height="24"
                    />
                    Chrome Extension
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3 grow md:grow-0">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                <h2 className="text-white text-lg title-font font-medium">
                  Bookmark{" "}
                </h2>
              </div>
              <p className="leading-relaxed text-base pt-3">
                Bookmark{" "}
                <span className="text-indigo-500 text-bold">
                  <Link to="/redirect" className="font-bold" target="_blank">
                    Random Website
                  </Link>
                </span>{" "}
                or drag{" "}
                <Link to="/redirect" className="font-bold" target="_blank">
                  🔀
                </Link>{" "}
                to your favorites bar.
              </p>
              <div className="flex-grow flex items-center justify-center">
                <p className="leading-relaxed text-base">
                  <Link to="/redirect" className="font-bold" target="_blank">
                    🔀
                  </Link>{" "}
                  &nbsp;&nbsp;← Drag to your Favorites Bar{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3 grow md:grow-0">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                <h2 className="text-white text-lg title-font font-medium">
                  Open Source
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  This program is free software: you can redistribute it and/or
                  modify it under the terms of the
                  <a
                    href="https://www.gnu.org/licenses/agpl.html"
                    rel="external"
                    className="text-indigo-500 text-bold"
                  >
                    &nbsp;GNU Affero General Public License&nbsp;
                  </a>
                  as published by the
                  <a
                    href="https://www.fsf.org/"
                    rel="external"
                    className="text-indigo-500 text-bold"
                  >
                    &nbsp;Free Software Foundation
                  </a>
                  .
                </p>
                <a
                  href="https://github.com/mick-schroeder/gatsby-random-website"
                  className="mt-3 text-indigo-400 inline-flex items-center"
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

          <div className="p-4 md:w-1/3 grow md:grow-0">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                <h2 className="text-white text-lg title-font font-medium">
                  Channel Surf the Web
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base pt-3">
                  One click to web surf the most important and influential
                  websites you should visit every day.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3 grow md:grow-0">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                <h2 className="text-white text-lg title-font font-medium">
                  StumbleUpon Alternative
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base pt-3">
                  Hit the{" "}
                  <span className="text-indigo-500 text-bold">
                    <Link to="/redirect" className="font-bold" target="_blank">
                      Random Website
                    </Link>
                  </span>{" "}
                  button to "stumble" similar to the former site StumbleUpon.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 md:w-1/3 grow md:grow-0">
            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
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
                <h2 className="text-white text-lg title-font font-medium">
                  Curated
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base pt-3">
                  The{" "}
                  <span className="text-indigo-500 text-bold">
                    <Link to="/redirect" className="font-bold" target="_blank">
                      Random Website
                    </Link>
                  </span>{" "}
                  algorithm is backed by an editor curated list of the most
                  influential websites on the internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
