import React, { createContext, useContext, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

const NextSiteContext = createContext();

export const useNextSiteContext = () => {
  return useContext(NextSiteContext);
};

export const NextSiteProvider = ({ children }) => {
  const sources = useStaticQuery(graphql`
    query {
      allSourcesJson {
        nodes {
          name
          url
          description
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
        }
      }
    }
  `).allSourcesJson.nodes;

  const randomIndex = Math.floor(Math.random() * sources.length);
  const initialSource = sources[randomIndex];

  const [nextSite, setNextSite] = useState(initialSource.url);
  const [nextSiteName, setNextSiteName] = useState(initialSource.name);
  const [nextSiteSlug, setNextSiteSlug] = useState(initialSource.slug);
  const [nextSiteDescription, setNextSiteDescription] = useState(
    initialSource.description,
  );
  const [nextSiteImage, setNextSiteImage] = useState(initialSource.image);

  const refreshNextSite = () => {
    const randomIndex = Math.floor(Math.random() * sources.length);
    const randomSource = sources[randomIndex];

    setNextSite(randomSource.url);
    setNextSiteName(randomSource.name);
    setNextSiteSlug(randomSource.slug);
    setNextSiteDescription(randomSource.description);
    setNextSiteImage(randomSource.image);
  };

  const contextValue = {
    nextSite,
    setNextSite,
    nextSiteName,
    setNextSiteName,
    nextSiteSlug,
    nextSiteDescription,
    nextSiteImage,
    refreshNextSite,
  };

  return (
    <NextSiteContext.Provider value={contextValue}>
      {children}
    </NextSiteContext.Provider>
  );
};
