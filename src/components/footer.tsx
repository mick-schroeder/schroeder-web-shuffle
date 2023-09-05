import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.svg";
import { useStaticQuery, graphql } from "gatsby";

const menuLinks = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Sources", link: "/sources" },
  { text: "Terms & Privacy Policy", link: "/terms-privacy" },
  { text: "API", link: "/api" },
  { text: "Code", link: "/source-code" },
  { text: "Contact", link: "/contact" },
];

const currentYear = new Date().getFullYear();

const FooterBar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          author
          authorUrl
          foundingYear
        }
      }
    }
  `);

  return (
    <div>
      <footer className="border-t border-gray-300 dark:border-gray-700">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
          <div className=" ">
            <Link to="/" className="flex items-center mb-4 sm:mb-0">
              <img
                src={logo}
                className="h-8 mr-3"
                alt={`${data.site.siteMetadata.name} Logo`}
              />
              <span className="text-2xl font-black tracking-tighter self-center whitespace-nowrap dark:text-gray-100">
                {data.site.siteMetadata.name}
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mt-4 py-4 text-sm font-medium text-gray-500 dark:text-gray-400">
              {menuLinks.map((link, index) => (
                <li key={index} className="mr-4 hover:underline md:mr-6">
                  <a
                    href={link.link}
                    className="focus:ring focus:ring-blue-300 block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 transition-all duration-300 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:-gray-border700"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <footer className="border-t border-gray-300 dark:border-gray-700">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <p>
              {" "}
              {data.site.siteMetadata.name}™ ©{" "}
              {data.site.siteMetadata.foundingYear}-{currentYear}{" "}
              <a
                href={data.site.siteMetadata.authorUrl}
                className="font-semibold hover:underline"
              >
                {data.site.siteMetadata.author}
              </a>
              . All Rights Reserved.
            </p>
            <p className="py-4 md:p-10 text-xs text-justify text-gray-500 dark:text-gray-400">
              This program is distributed in the hope that it will be useful,
              but without any warranty; without even the implied warranty of
              merchantability or fitness for a particular purpose. Some links
              may be sponsored or affiliate programs that earn commission. This
              site uses cookies and analytics trackers and is supported by
              advertising. These links are being provided as a convenience and
              for informational purposes only; they do not constitute an
              endorsement or an approval or opinions of that organization or
              individual. Not responsible for the accuracy, legality or content
              of the external site or for that of subsequent links. Contact the
              external site for answers to questions regarding their content.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterBar;
