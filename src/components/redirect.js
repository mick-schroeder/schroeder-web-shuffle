import PropTypes from "prop-types"
import React from "react"

// json
import JSONData from "../json/data.json"

class Redirect extends React.Component {
  componentDidMount() {
    var rand = JSONData.weblinks[~~(Math.random() * JSONData.weblinks.length)]

    window.location.href = rand.url
  }

  render() {
    return (
      <div className="my-6">
        <div className="inline-flex rounded-md shadow-lg">
          <a
            href="redirect"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-normal tracking-ex font-bold rounded-md text-white bg-green-500 hover:bg-green-700"
          >
            Redirect Now
          </a>
        </div>
      </div>
    )
  }
}

export default Redirect
