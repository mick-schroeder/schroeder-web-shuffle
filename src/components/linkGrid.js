//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"

const LinkGrid = ({}) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-gray-800 dark:text-gray-200 ">
    <a href="https://www.nytimes.com/">
      {" "}
      <div className="weblinkicon bg-gray-50">
        <div className="square">
          <img src="./newyorktimes.svg" alt="Logo" className="fill-current" />
        </div>
      </div>
    </a>
    <a href="https://www.reddit.com/">
      {" "}
      <div className="weblinkicon bg-red-500">
        <div className="square">
          <img src="./reddit.svg" alt="Logo" className="fill-current" />
        </div>
      </div>
    </a>
    <a href="https://news.ycombinator.com/">
      {" "}
      <div className="weblinkicon bg-yellow-500">
        <div className="square">
          <img
            src="./hacker-news-brands.svg"
            alt="Logo"
            className="fill-current"
          />
        </div>
      </div>
    </a>
    <a href="https://www.facebook.com/">
      {" "}
      <div className="weblinkicon bg-blue-400">
        <div className="square">
          <img src="./facebook.svg" alt="Logo" className="fill-current" />
        </div>
      </div>
    </a>
    <a href="https://www.instagram.com/">
      {" "}
      <div className="weblinkicon bg-purple-400">
        <div className="square">
          <img
            src="./instagram-brands.svg"
            alt="Logo"
            className="fill-current"
          />
        </div>
      </div>
    </a>
    <a href="https://www.drudgereport.com/" target="_blank" rel="noopener">
      <div className="weblinkicon bg-gray-50">
        <div className="square">
          <img src="./drudgereport.svg" alt="Logo" className="fill-current" />
        </div>
      </div>
    </a>
    <a href="https://imgur.com/">
      <div className="weblinkicon bg-green-400">
        <div className="square">
          <img src="./imgur.svg" alt="Logo" className="fill-current" />
        </div>
      </div>
    </a>
    <a href="https://www.youtube.com/">
      {" "}
      <div className="weblinkicon bg-red-500">
        <div className="square">
          <img src="./youtube.svg" alt="Logo" className="fill-current" />
        </div>
      </div>
    </a>
    <a href="https://trakt.tv/discover">
      {" "}
      <div className="weblinkicon bg-pink-400">
        <div className="square">
          {" "}
          <img src="./trakt.svg" alt="Logo" className="fill-current" />
        </div>
      </div>
    </a>
    <a href="https://www.washingtonpost.com/" target="_blank" rel="noopener">
      {" "}
      <div className="weblinkicon bg-gray-50">
        <div className="square">
          <img
            src="./thewashingtonpost.svg"
            alt="Logo"
            className="fill-current"
          />
        </div>
      </div>
    </a>
    <a href="https://www.imdb.com/chart/moviemeter/">
      <div className="weblinkicon bg-yellow-300">
        <div className="square">
          <img src="./imdb.svg" alt="Logo" className="fill-current" />
        </div>
      </div>
    </a>
    <a href="https://store.steampowered.com/">
      <div className="weblinkicon bg-blue-900">
        <div className="square">
          <img src="./steam.svg" alt="Logo" className="fill-current" />
        </div>
      </div>
    </a>
  </div>
)

export default LinkGrid
