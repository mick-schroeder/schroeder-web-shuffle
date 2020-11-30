import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkGrid from "../components/linkGrid"

// left
import WebingestIcon from "../images/assets/icon-web-ingest.svg"
import RandomIcon from "../images/assets/random-solid.svg"
//import SafariIcon from "../images/assets/safari.svg"
//import MicrosoftEdgeIcon from "../images/assets/microsoftedge.svg"
import GoogleChromeIcon from "../images/assets/googlechrome.svg"
//import FirefoxBrowserIcon from "../images/assets/firefoxbrowser.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-full h-full flex-grow flex-1 flex flex-wrap  shadow-2xl">
      <div className="w-full md:w-1/2 flex items-stretch justify-end bg-gray-200 dark:bg-gray-800">
        <div className="p-10 flex flex-row-reverse ">
          <div className="container p-10">
            <WebingestIcon alt="Logo" width="120" height="120" />
            <h1 className="py-6 text-6xl tracking-tight font-serif font-bold text-gray-900 dark:text-gray-50 sm:text-4xl md:text-5xl">
              Web Ingest
            </h1>
            <h2 className="text-lg tracking-tight text-gray-700 dark:text-blue-300 sm:text-lg md:text-xl">
              by <a href="https://mickschroeder.com" rel="external">Mick Schroeder</a>
            </h2>
            <p className="text-gray-800 dark:text-gray-200 py-6">
              Click below to be redirected to a selection of curated websites.
            </p>
            <div className="my-6">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="shuffle"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-2xl tracking-ex font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Shuffle
                  <RandomIcon
                    alt="Random"
                    className="fill-current ml-3"
                    width="32"
                    height="32"
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="my-12">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="shuffle"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-xl text-gray-900 bg-gray-300 hover:bg-gray-400"
                  >
                    <GoogleChromeIcon
                      alt="Random"
                      className="fill-current mr-3"
                      width="32"
                      height="32"
                    />
                    (Coming Soon)
                  </a>
                </div>
              </div> 
              <div>
                <p className="text-gray-800 dark:text-gray-200">
                  Bookmark: <a href="https://webingest.com/shuffle">🔀</a> (Drag
                  to your toolbar)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-5 flex flex-col items-center justify-center">
        <LinkGrid />
        <div>
          {" "}
          <p className="p-6 text-gray-light">
            <a href="/shuffle">Shuffle</a> these and more...
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
