import React from "react";
import { Link } from "gatsby";
import Logo from "../components/logo.js";
import webshuffle from "../images/web-shuffle.svg";

import { useStaticQuery, graphql } from "gatsby";
import RedirectButton from "../components/redirect-button";

const SideBar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          author
          authorUrl
          foundingYear
          description
          tagLine
        }
      }
    }
  `);

  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 md:p-8">
      <div className="flex-col content-center mx-auto text-center">
        <span className="hidden sm:block">
          <Logo />
        </span>
        <h2 className="my-2 text-4xl tracking-tight font-extrabold leading-tight text-zinc-900 dark:text-white">
          {data.site.siteMetadata.tagLine}
        </h2>

        {/*     <img
            src={webshuffle}
            className="h-32 mx-auto my-12 opacity-50"
            alt={`${data.site.siteMetadata.name} Logo`}
          /> */}

        <p className="mb-6 font-light text-zinc-500 dark:text-zinc-400 md:text-lg">
          {data.site.siteMetadata.description}
        </p>

        <RedirectButton />
      </div>
    </div>
  );
};

export default SideBar;
