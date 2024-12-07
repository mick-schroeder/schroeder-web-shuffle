import * as React from "react";
import { Link } from "gatsby";
import RedirectButton from "./redirect-button";
import USFlag from "../images/flags/us.svg";
import Logo from "../components/logo.js";

import WebShufflePlayer from "../components/player";

export default function DefaultNavbar() {
  return (
    /*  <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> */

    <nav className="z-20 backdrop-blur bg-zinc-200/80 dark:bg-zinc-700/80 md:fixed start-0 top-0 left-0 md:left-64 right-0 border-b border-zinc-300 dark:border-zinc-700">
      <div className="lg:max-w-screen-lg md:max-w-screen-md flex flex-wrap items-center justify-center mx-auto gap-2 py-2">
        <span className="sm:hidden mx-4">
          <Logo />
        </span>
        <WebShufflePlayer />
        <div className="flex flex-inline gap-x-4">
          <RedirectButton className="m-4" />
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-zinc-900 dark:text-white rounded-lg cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700"
          >
            <img className="h-6 mr-2" src={USFlag} alt="Flag" />
            English (US)
          </button>
        </div>
      </div>
    </nav>
  );
}
