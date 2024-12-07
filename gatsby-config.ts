require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    name: `Web Shuffle`,
    title: `Web Shuffle`,
    tagLine: `The shuffle button for the internet.`,
    description: `Web Shuffle revolutionizes how you consume the internet. With a single click, our Web Shuffle button takes you to the most prominant websites online. Explore diverse perspectives, stay informed, and break free from your regular web surfing routine.`,
    twitterUsername: `@mick_schroeder`,
    image: `/web-shuffle-large-promo.png`,
    author: `Mick Schroeder, LLC`,
    authorUrl: `https://mickschroeder.com`,
    foundingYear: `2021`,
    email: `webshuffle@mickschroeder.com`,
    siteUrl: `https://webshuffle.mickschroeder.com`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web Shuffle`,
        short_name: `Web Shuffle`,
        start_url: `/`,
        background_color: `#1f2937`,
        lang: `en`,
        theme_color: `#1f2937`,
        display: `standalone`,
        cache_busting_mode: "none",
        icon: `src/images/icon.svg`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/icons*"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-RMM4MSRDQM", // Google Analytics        
          ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `./src/data/`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx"],
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx-pages`,
        path: `${__dirname}/src/mdx-pages`, // Directory containing your MDX files
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://webshuffle.mickschroeder.com",
        sitemap: "https://webshuffle.mickschroeder.com/sitemap-index.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [
              { userAgent: "*", allow: "/" },
              { userAgent: "*", disallow: ["/redirect"] },
            ],
          },
        },
      },
    },
  ],
};

export default config;
