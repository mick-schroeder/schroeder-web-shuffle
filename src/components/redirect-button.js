import React from "react";
import { useNextSiteContext } from "./next-site-context";
//import { Link } from "gatsby";
import WebShuffleIcon from "../images/web-shuffle.svg"

const RedirectButton = () => {
  const { nextSite, refreshNextSite } = useNextSiteContext();

  const handleClick = (event) => {
    event.preventDefault();
    window.open(nextSite, "_blank");
    refreshNextSite();
  };

  return (
    <a
      href={nextSite}
      onClick={handleClick}
      className="
      cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium 
        text-white rounded-lg transform transition-transform 
        bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
        focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 shadow-md
      "
    >
      Web Shuffle
      <img src={WebShuffleIcon} className="w-3.5 h-3.5 ml-2 fill-white" alt="Web Shuffle Icon" />

    </a>
  );
};

export default RedirectButton;
