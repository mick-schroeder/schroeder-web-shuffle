import React, { useEffect, useState } from "react";
import { useNextSiteContext } from "./next-site-context";

const Redirecter = () => {
  const { nextSite } = useNextSiteContext();
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    if (nextSite) {
      // For development purposes, introduce a delay of 2 seconds before redirecting
      const redirectTimeout = setTimeout(() => {
        setIsLoading(true); // Start loading
        window.location.href = nextSite; // Redirect
      }, 200);

      return () => clearTimeout(redirectTimeout); // Clean up on unmount
    }
  }, [nextSite]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-8 shadow-md md:my-16 ">
          <p className="text-xl font-bold mb-4 text-black dark:text-gray-300">
            Redirecting...
          </p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-600 border-solid"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-8 shadow-md">
        <p className="text-xl font-bold mb-4 text-black dark:text-gray-300">
          Redirecting...
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          You will be redirected shortly to:
        </p>
        <p className="text-blue-500 dark:text-blue-300 font-medium">
          {nextSite}
        </p>
      </div>
    </div>
  );
};

export default Redirecter;
