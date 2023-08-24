import React from "react";
import { useNextSiteContext } from "./next-site-context";
import { Link } from "gatsby";

const RedirectButton = () => {
  const { nextSite, refreshNextSite } = useNextSiteContext();

  const handleClick = (event) => {
    event.preventDefault();
    window.open(nextSite, "_blank");
    refreshNextSite();
  };

  return (
    <Link
      to={nextSite}
      onClick={handleClick}
      className="
      cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium 
        text-white rounded-lg transform transition-transform 
        bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 
        focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 shadow-md
      "
    >
      Web Shuffle
      <svg
        className="w-3.5 h-3.5 ml-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  );
};

export default RedirectButton;
