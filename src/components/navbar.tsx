import * as React from "react";
import { Link } from "gatsby";
import RedirectButton from "./redirect-button";
import logo from "../images/logo.svg"

const NAV_ITEMS = [
  { title: "Home", slug: "" },
  { title: "About Us", slug: "about" },
  { title: "Apps", slug: "apps" },
  { title: "Digital Newsstand", slug: "newsstand" },
  { title: "Our Sources", slug: "sources" },
];

export default function DefaultNavbar() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();

  return (
    <div>
<nav className="backdrop-blur-lg bg-white/40 dark:bg-gray-900/40 md:fixed w-full z-20 top-0 left-0 border-b border-gray-300 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
        <div className="hidden md:block flex-none text-xs font-semibold text-black dark:text-blue-200">
        {formattedDate}
        </div>

        <div className="flex m-4 md:m-0 order-1">
          <RedirectButton />
        </div>
 
        <div
          className={` flex items-center w-auto order-0`}
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
      </div>
    </nav>
    <nav className="border-b border-gray-300 dark:border-gray-700">
    <div className="max-w-screen-xl px-3 py-3 mx-auto md:mt-20">
        <div className="flex items-center justify-center">
        <ul className="flex flex-row flex-wrap font-medium mt-0 mr-5 space-x-8 text-sm">
                {NAV_ITEMS.map(({ title, slug }) => (
              <li key={slug}>
                <Link
                  to={`/${slug}`}
                  className="focus:ring focus:ring-blue-300 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 transition-all duration-300 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
</div>
  );
}
