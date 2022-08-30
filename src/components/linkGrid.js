//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"

const LinkGrid = ({}) => (
  <div className="flex items-center justify-center">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-gray-800 dark:text-gray-200 justify-items-center max-w-screen-lg">
      <a href="https://nytimes.com/" target="_blank" rel="noreferrer">
        {" "}
        <div className="weblinkicon bg-gray-50">
          <div className="square">
            <img
              src="./newyorktimes.svg"
              alt="Logo"
              className="fill-current"
              width="64"
              height="64"
            />
          </div>
        </div>
      </a>
      <a href="https://www.reddit.com/" target="_blank" rel="noreferrer">
        {" "}
        <div className="weblinkicon bg-red-500">
          <div className="square">
            <img
              src="./reddit.svg"
              alt="Logo"
              className="fill-current"
              width="64"
              height="64"
            />
          </div>
        </div>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        {" "}
        <div className="weblinkicon bg-blue-400">
          <div className="square">
            <img
              src="./facebook.svg"
              alt="Logo"
              className="fill-current"
              width="64"
              height="64"
            />
          </div>
        </div>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        {" "}
        <div className="weblinkicon bg-purple-400">
          <div className="square">
            <img
              src="./instagram-brands.svg"
              alt="Logo"
              className="fill-current"
              width="64"
              height="64"
            />
          </div>
        </div>
      </a>
      <a href="https://www.drudgereport.com/" target="_blank" rel="noreferrer">
        <div className="weblinkicon bg-gray-50">
          <div className="square">
            <img
              src="./drudgereport.svg"
              alt="Logo"
              className="fill-current"
              width="64"
              height="64"
            />
          </div>
        </div>
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        {" "}
        <div className="weblinkicon bg-red-500">
          <div className="square">
            <img
              src="./youtube.svg"
              alt="Logo"
              className="fill-current"
              width="64"
              height="64"
            />
          </div>
        </div>
      </a>
      <a
        href="https://www.washingtonpost.com/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <div className="weblinkicon bg-gray-50">
          <div className="square">
            <img
              src="./thewashingtonpost.svg"
              alt="Logo"
              className="fill-current"
              width="64"
              height="64"
            />
          </div>
        </div>
      </a>
      <a
        href="https://www.imdb.com/chart/moviemeter/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="weblinkicon bg-yellow-300">
          <div className="square">
            <img
              src="./imdb.svg"
              alt="Logo"
              className="fill-current"
              width="64"
              height="64"
            />
          </div>
        </div>
      </a>
    </div>
  </div>
)

export default LinkGrid
