import React from "react";
import { NextSiteProvider } from "./next-site-context";
import Navbar from "./navbar";
import FooterBar from "./footer";

const SiteLayout = ({ children }) => (
  <NextSiteProvider>
    <div className="flex flex-col min-h-screen antialiased bg-white dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <header className="">
        <Navbar />
      </header>
      {/* Content */}
      <div className="flex-grow flex flex-col md:flex-row justify-center mt-4 mb-4">
        <main className="flex-grow p-4 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </div>
      {/* Footer */}
      <FooterBar />
    </div>
  </NextSiteProvider>
);

export default SiteLayout;
