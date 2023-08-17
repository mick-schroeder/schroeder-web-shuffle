import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

// json
import JSONData from "../json/mick-schroeder.json"

class PressShuffleMachine extends React.Component {
  componentDidMount() {
    if (this.props.channel) {
      JSONData = JSONData.filter(d => d.channel == this.props.channel)
      //console.log('JSONData filtered')
      //console.log(JSONData)
    }

    var rand = JSONData[~~(Math.random() * JSONData.length)]

    // window.gtag('event', 'Random Website Generated', {
    //   'event_label' : rand.url
    //  });

    window.location.href = rand.url
  }

  render() {
    return (
      <div className="my-6">
        <div className="inline-flex rounded-md shadow-lg">
          <Link
            to="/redirect"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-normal tracking-ex font-bold rounded-md text-white bg-green-500 hover:bg-green-700"
          >
            Redirect Now
          </Link>
        </div>
      </div>
    )
  }
}

export default PressShuffleMachine
