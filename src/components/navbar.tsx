import * as React from "react";
import { Link } from "gatsby";
import RedirectButton from "./redirect-button";
import logo from "../images/logo.svg";
import WebShufflePlayer from "../components/player";

const NAV_ITEMS = [
  { title: "Home", slug: "" },
  { title: "About", slug: "about" },
  //{ title: "Apps", slug: "apps" },
  //{ title: "Categories", slug: "categories" },
  //{ title: "Digital Newsstand", slug: "newsstand" },
  { title: "Sources", slug: "sources" },
];

export default function DefaultNavbar() {
  return (
    <div>
      <nav className="backdrop-blur bg-white/80 dark:bg-gray-900/80 md:fixed w-full z-20 top-0 left-0 border-b border-gray-300 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto px-4">
          <div
            className={`flex justify-center order-0 w-full md:w-auto my-6 md:my-0`}
          >
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="h-10 mr-3 transition-transform transform hover:rotate-3"
                alt="Logo"
              />
              <span className="self-center text-4xl font-black tracking-tighter whitespace-nowrap dark:text-gray-100">
                Web Shuffle
              </span>
            </Link>
          </div>

          <WebShufflePlayer />

          <div className="hidden lg:block flex m-4 md:m-0 order-2">
            <RedirectButton />
          </div>
        </div>
      </nav>

      {/* 
      <nav className="border-b border-gray-300 dark:border-gray-700 mt-0 md:mt-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-center">
            <ul className="flex items-center justify-around md:justify-center flex-row flex-wrap font-medium mt-0 mx-2 md:mx-5 text-sm ">
              {NAV_ITEMS.map(({ title, slug }) => (
                <li
                  key={slug}
                  className="my-2 mx-2 md:mx-2 rounded-lg border md:border-0 border-gray-300 dark:border-gray-700 hover:bg-gray-200 hover:dark:bg-gray-800 py-2 px-4 md:px-2 md:py-0 shadow md:shadow-none ring-1 ring-black ring-opacity-5 focus:outline-none "
                >
                  <Link
                    to={`/${slug}`}
                    className="block p-2 text-gray-900 hover:bg-gray-100 transition-all duration-300 hover:bg-transparent hover:text-blue-700 dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      */}
    </div>
  );
}
