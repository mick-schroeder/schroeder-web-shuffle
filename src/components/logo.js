//import PropTypes from "prop-types"
import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.svg";
import { useStaticQuery, graphql } from "gatsby";

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  return(  
  <Link to="/" className="inline-flex items-center">
          <img
            src={logo}
            className="h-6 mr-2"
            alt={`${data.site.siteMetadata.name} Logo`}
          />
          <span className="text-xl font-black tracking-tighter self-center whitespace-nowrap dark:text-zinc-100">
            {data.site.siteMetadata.name}
          </span>
        </Link>
      );
    };
    
    export default Logo;
