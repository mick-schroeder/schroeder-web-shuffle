import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { Link, graphql } from "gatsby"

// icons
import WebShuffleIcon from "../images/assets/icon-random-website.svg"


const Page = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query {
    allMickSchroederJson {
      edges {
        node {
          name
          score
          tag
          url
          color
          image
        }
      }
    }
  }
`

export default Page