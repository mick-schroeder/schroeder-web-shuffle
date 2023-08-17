import React from "react"
import { Link } from "gatsby"
import AdSense from "react-adsense"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Layout from "../components/layout"
import LinkGrid from "../components/linkGrid"

// left
//import PressShuffleIcon from "../images/assets/icon-random-website.svg"
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
    <section className="text-slate-600 dark:text-slate-400 body-font">
      <div className="container max-w-5xl	px-2 py-4 mx-auto flex flex-wrap items-center ">
        <div className="flex flex-col items-center">
          <h2 className="m-6 md:my-5 text-6xl text-slate-800 dark:text-white font-bold tracking-tight leading-none text-center">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-violet-500 font-extrabold">
              Press Shuffle
            </span>
            {", "} the <span className="">AI curated</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">
              shuffle button
            </span>{" "}
            for news websites.
          </h2>

          <div className="mt-4 mb-4 text-center">
            <a
              href="/redirect"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-2xl uppercase tracking-tightest font-black rounded-md text-white bg-green-500 hover:bg-green-700"
              target="_blank"
            >
              Press Shuffle
              <RandomIcon
                alt="Random"
                className="fill-current ml-3"
                width="32"
                height="32"
              />
            </a>
            <p class="mt-6 mb-8 font-normal max-w-prose text-center text-gray-500 sm:px-16 xl:px-48 dark:text-gray-400 ">
              {" "}
              Simply click the{" "}
              <span className="uppercase tracking-tightest font-black">
                Press Shuffle
              </span>{" "}
              button and let us take you to the best and most influential news
              sites.
            </p>
          </div>
        </div>
        <div className="md:ml-auto w-full mt-10 md:mt-0">
          <LinkGrid />
        </div>
      </div>
    </section>
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container max-w-5xl	px-5 py-8 mx-auto flex flex-wrap">
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
                  Enhance your web browser with our browser extension. It adds
                  the{" "}
                  <span className="uppercase tracking-tightest font-black">
                    Press Shuffle
                  </span>{" "}
                  button to your browser's toolbar.
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
                Bookmark the URL for{" "}
                <span className="text-indigo-500 text-bold">
                  <a
                    href="/redirect"
                    className="uppercase tracking-tightest font-black"
                    target="_blank"
                  >
                    Press Shuffle
                  </a>
                </span>{" "}
                or drag{" "}
                <a href="/redirect" className="font-bold" target="_blank">
                  🔀
                </a>{" "}
                to your favorites bar.
              </p>
              <div className="flex-grow flex items-center justify-center">
                <p className="leading-relaxed text-base">
                  <a href="/redirect" className="font-bold" target="_blank">
                    🔀
                  </a>{" "}
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
                  Experience the thrill of web surfing by channel surfing the
                  web with just one click on the{" "}
                  <span className="uppercase tracking-tightest font-black">
                    Press Shuffle
                  </span>{" "}
                  button.
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
                  Alternative to StumbleUpon
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base pt-3">
                  StumbleUpon and The Useless Web are fun for wasting time. Our
                  algorighm is designed to focus on a curated list of the top
                  new sites on the web.
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
                  AI Editor Curated
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base pt-3">
                  The{" "}
                  <a
                    href="/redirect"
                    className="text-indigo-500 uppercase tracking-tightest font-black"
                    target="_blank"
                  >
                    Press Shuffle
                  </a>{" "}
                  algorithm is backed by an AI editor curated list of the most
                  influential news websites on the internet.
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
