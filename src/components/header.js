//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import WebShuffleIcon from "../images/assets/icon-random-website.svg"
import RandomIcon from "../images/assets/random-solid.svg"
import MickSchroederIcon from "../images/assets/mickschroeder.svg"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="navigation bg-black p-5 flex items-center justify-around">
    <div className="container gap-y-7 md:gap-y-0 flex flex-col md:flex-row items-center justify-around">
      <a
        href="https://mickschroeder.com"
        rel="external"
        aria-label="Mick Schroeder Logo"
      >
        <MickSchroederIcon
          className="fill-current text-white"
          height="24px"
          alt="Mick Schroeder Logo"
        />
      </a>

      <Link to="/">
        <div className="flex flex-row items-center space-x-3">
          <WebShuffleIcon className="" alt="Logo" width="30" height="30" />
          <h1 className="text-3xl tracking-tight font-serif font-bold text-gray-50">
            Web Shuffle
          </h1>
        </div>
      </Link>
      <div className="rounded-md shadow hidden md:block">
        <a
          href="/redirect"
          className="inline-flex items-center justify-center text-xs px-3 py-2 border border-transparent tracking-ex font-bold rounded-md text-white bg-green-500 hover:bg-green-700"
          target="_blank"
        >
          Web Shuffle
          <RandomIcon
            alt="Random"
            className="fill-current ml-3"
            width="16"
            height="16"
          />
        </a>
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
