"use client";
import * as React from "react";
import { Link } from "gatsby";

const currentYear = new Date().getFullYear();

export default function FooterWithSocialMediaIcons() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="/logo.svg"
              className="h-8 mr-3"
              alt="Web Shuffle Logo"
            />
            <span className="text-2xl font-black tracking-tighter uppercase self-center whitespace-nowrap dark:text-slate-100">
              Web Shuffle
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/terms-privacy"
                className="mr-4 hover:underline md:mr-6"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/api" className="mr-4 hover:underline md:mr-6 ">
                API
              </Link>
            </li>
            <li>
              <Link
                to="mailto:webshuffle@mickschroeder.com"
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <p>
            {" "}
            Web Shuffle™ © 2021-{currentYear} Mick Schroeder, LLC. All Rights Reserved.
          </p>
          <p className="py-4 md:p-10 text-xs text-justify text-gray-500 dark:text-gray-400">
            This program is distributed in the hope that it will be useful, but
            without any warranty; without even the implied warranty of
            merchantability or fitness for a particular purpose. Some links may
            be sponsored or affiliate programs that earn commission. This site
            uses cookies and analytics trackers and is supported by advertising.
            These links are being provided as a convenience and for
            informational purposes only; they do not constitute an endorsement
            or an approval or opinions of that organization or individual. Not
            responsible for the accuracy, legality or content of the external
            site or for that of subsequent links. Contact the external site for
            answers to questions regarding their content.
          </p>
        </span>
      </div>
    </footer>
  );
}
