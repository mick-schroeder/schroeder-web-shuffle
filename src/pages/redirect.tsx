// src/pages/RedirectPage.js

import React, { useEffect } from "react";
import { useNextSiteContext } from "../components/next-site-context";
import SiteLayout from "../components/site-layout"; // Import the Layout component
import Redirecter from "../components/redirect";
import { SEO } from "../components/seo";

const RedirectPage = () => {
  return (
    <SiteLayout>
      <div className="flex items-center justify-center">
        <Redirecter />
      </div>
    </SiteLayout>
  );
};

export default RedirectPage;
export const Head = () => (
  <SEO title="Web Shuffle - Redirect" />
)