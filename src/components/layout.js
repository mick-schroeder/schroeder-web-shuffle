/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id="wrapper" className="min-h-screen w-full h-full flex flex-col">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        {children}
        <footer className="bg-black flex-none w-full text-xs text-center light text-gray-200	p-6">
          © {new Date().getFullYear()} Mick Schroeder, LLC. -
          <a
            rel="external"
            className="text-indigo-600 dark:text-indigo-400 font-semibold"
            aria-label="Mick Schroeder Logo"
            href="https://forms.gle/NUfsWq98uTopmm2S9"
          >
            {" "}
            Request new site
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
