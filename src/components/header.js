//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import WebShuffleIcon from "../images/assets/icon-web-shuffle.svg"
import RandomIcon from "../images/assets/random-solid.svg"
import MickSchroederIcon from "../images/assets/mickschroeder.svg"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="navigation w-screen bg-black p-6 flex flex-col items-center">
    <div className="container flex flex-col space-y-6 md:space-y-0 md:flex-row flex-wrap items-center justify-between">
      <a
        href="https://mickschroeder.com"
        rel="external"
        aria-label="Mick Schroeder Logo"
      >
        <MickSchroederIcon
          className="fill-current text-white"
          height="30px"
          alt="Mick Schroeder Logo"
        />
      </a>

      <Link to="/">
        <div className="flex flex-row items-center space-x-3">
          <WebShuffleIcon className="" alt="Logo" width="30" height="30" />

          <h1 className="text-4xl tracking-tight font-serif font-bold text-gray-900 dark:text-gray-50">
            Web Shuffle
          </h1>
        </div>
      </Link>
      <div className="rounded-md shadow hidden md:block">
        <Link
          to="/redirect"
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent tracking-ex font-bold rounded-md text-white bg-blue-400 hover:bg-blue-700"
        >
          Shuffle
          <RandomIcon
            alt="Random"
            className="fill-current ml-3"
            width="16"
            height="16"
          />
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
