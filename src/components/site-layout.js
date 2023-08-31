import React from "react";
import { NextSiteProvider } from "./next-site-context";
import Navbar from "./navbar";
import FooterBar from "./footer";

const SiteLayout = ({ children }) => (
  <NextSiteProvider>
    <div className="flex flex-col min-h-screen antialiased bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <header className="">
        <Navbar />
      </header>
      {/* Content */}
      <div className="flex-grow flex flex-col md:flex-row justify-center mb-2">
        <main className="flex-grow  mx-auto  max-w-screen-xl">
          {children}
        </main>
      </div>
      {/* Footer */}
      <FooterBar />
    </div>
  </NextSiteProvider>
);

export default SiteLayout;
