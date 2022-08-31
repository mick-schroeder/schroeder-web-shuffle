import React from "react"
import Layout from "../components/layout"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import RandomWebsiteMachine from "../components/randomWebsiteMachine"
// icons
import RandomWebsiteIcon from "../images/assets/icon-random-website.svg"

const PageTemplate = ({ pageContext }) => (
  <Layout>
    <GatsbySeo noindex={true} />
    <div className="w-full h-full flex-grow flex-1 flex flex-wrap">
      <div className="w-full flex items-stretch justify-center bg-gray-100 dark:bg-gray-800">
        <div className="container p-10 text-center mt-10">
          <RandomWebsiteIcon
            className="mx-auto"
            alt="Logo"
            width="120"
            height="120"
          />
          <h1 className="py-6 text-6xl tracking-tight font-serif font-bold text-gray-900 dark:text-gray-50 sm:text-4xl md:text-5xl">
            Random Website
          </h1>
          <h2 className="text-lg tracking-tight text-gray-700 dark:text-blue-300 sm:text-lg md:text-xl">
            by <a href="http://mickschroeder.com">Mick Schroeder</a>
          </h2>
          <p className="text-gray-800 dark:text-gray-200 pb-6 pt-12">
            You will be redirected soon...
          </p>
          <RandomWebsiteMachine channel={pageContext.channel} />
        </div>
      </div>
    </div>
  </Layout>
)
export default PageTemplate
