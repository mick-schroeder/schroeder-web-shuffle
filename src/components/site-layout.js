import React from "react";
import { NextSiteProvider } from "./next-site-context";
import Navbar from "./navbar";
import FooterBar from "./footer";
import SideBar from "./sidebar";

const SiteLayout = ({ children }) => (
  <NextSiteProvider>
    <div className="antialiased bg-white dark:bg-zinc-900 min-h-screen">
      {/* Sidebar */}
      <aside
        aria-label="Sidenav"
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-zinc-100 border-r border-zinc-200 md:translate-x-0 dark:bg-zinc-700/30 dark:border-zinc-700"
      >
        <SideBar />
      </aside>
      {/* Body */}
      <div class="md:ml-64 h-auto md:pt-20">
        {/* Header */}
        <header className="">
          <Navbar />
        </header>

        {/* Content */}
        <main className="p-4 md:mt-20 lg:mt-5 md:p-2 sm:mx-10 md:mx-auto container md:max-w-screen-md lg:max-w-screen-lg">
          {children}
        </main>

        {/* Footer */}
        <FooterBar />
      </div>
    </div>
  </NextSiteProvider>
);

export default SiteLayout;
