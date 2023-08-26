import * as React from "react";
import { Link } from "gatsby";
import RedirectButton from "./redirect-button";
import logo from "../images/logo.svg"

const NAV_ITEMS = [
  { title: "Home", slug: "" },
  { title: "About", slug: "about" },
  { title: "Apps", slug: "apps" },
  { title: "Sources", slug: "sources" },
  { title: "API", slug: "api" },
];

export default function DefaultNavbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex-none">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="h-8 mr-3 transition-transform transform hover:rotate-3"
              alt="Logo"
            />
            <span className="self-center text-2xl font-black tracking-tighter self-center whitespace-nowrap dark:text-slate-100">
              Web Shuffle
            </span>
          </Link>
        </div>
        <div className="hidden md:block flex m-2 md:m-0 md:order-2">
          <RedirectButton />
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          data-collapse-toggle="navbar-cta"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {NAV_ITEMS.map(({ title, slug }) => (
              <li key={slug}>
                <Link
                  to={`/${slug}`}
                  className="focus:ring focus:ring-blue-300 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-slate-100 transition-all duration-300 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
  );
}
