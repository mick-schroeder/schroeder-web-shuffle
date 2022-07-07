import React from "react"
import { Link } from "gatsby"
import AdSense from "react-adsense"
import { GatsbySeo } from 'gatsby-plugin-next-seo';
import Layout from "../components/layout"
import LinkGrid from "../components/linkGrid"

// left
import WebShuffleIcon from "../images/assets/icon-web-shuffle.svg"
import RandomIcon from "../images/assets/random-solid.svg"
//import SafariIcon from "../images/assets/safari.svg"
//import MicrosoftEdgeIcon from "../images/assets/microsoftedge.svg"
import GoogleChromeIcon from "../images/assets/googlechrome.svg"
//import FirefoxBrowserIcon from "../images/assets/firefoxbrowser.svg"

const IndexPage = () => (
  <Layout>
  <GatsbySeo/>
    <div className="text-center">
      <AdSense.Google client="ca-pub-6344797609391119" slot="1966196909" />
    </div>
    <div className="w-full h-full flex-grow flex-1 flex flex-wrap shadow-2xl">
      <div className="w-full flex items-stretch justify-center bg-gray-200 dark:bg-gray-800">
        <div className="md:p-10 flex flex-row-reverse ">
          <div className="container text-center md:max-w-md p-5">
          <Link
                  to="/redirect"
                >
                   <WebShuffleIcon
            className="mx-auto"
            alt="Logo"
            width="120"
            height="120"
          />                
            <h1 className="py-3 text-6xl tracking-tight font-serif font-bold text-gray-900 dark:text-gray-50 sm:text-4xl md:text-5xl">
              Web Shuffle
            </h1></Link>
            <h2 className="text-md tracking-tight text-gray-700 dark:text-blue-300 sm:text-lg">
              Curated by{" "}
              <a href="https://mickschroeder.com" rel="external">
                Mick Schroeder
              </a>
            </h2>
            <p className="text-gray-800 dark:text-gray-200 pt-4 pb-3">
              Shuffle a random link from the most influential sites across the web.
            </p>
            <div className="my-3">
              <div className="inline-flex rounded-md shadow">
              <Link
                  to="/redirect"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-2xl tracking-ex font-bold rounded-md text-white bg-green-500 hover:bg-green-700"
                >
                  Shuffle
                  <RandomIcon
                    alt="Random"
                    className="fill-current ml-3"
                    width="32"
                    height="32"
                  />
                </Link>
              </div>
            </div>
            <div>
              <div className="my-3">
              <h3 className="text-gray-800 font-bold dark:text-gray-400 pt-6 pb-6">
              Add to your browser:
            </h3>
                <div className="inline-flex rounded-md shadow ml-6">
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
                  </a>
                </div>
              </div>
              <div>
                <p className="ml-6 text-sm text-gray-800 dark:text-gray-200">
                  Bookmark:{" "}
                  <a href="https://webshuffle.mickschroeder.com/redirect">🔀</a>{" "}
                  (Drag to your Favorites Bar)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-12">
      </div>
      <div className="w-full p-12">
      <LinkGrid />
        <div>
          {" "}
          <p className="text-sm text-center	p-6 pt-12 text-gray-light">
            <Link
              to="/redirect"
              className="text-indigo-600 dark:text-indigo-400 font-bold"
            >
              Shuffle
            </Link>{" "}
            these sites and more...
          </p>
        </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
