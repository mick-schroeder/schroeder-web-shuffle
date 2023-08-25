import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Web Shuffle: AI-Curated Exploration of Top News Websites`,
    description: `Simply click the Web Shuffle button and let our AI curator take you to the best and most influential websites.`,
    twitterUsername: `@mick_schroeder`,
    image: `/web-shuffle-large-promo.png`,
    siteUrl: `https://webshuffle.mickschroeder.com`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web Shuffle`,
        short_name: `WebShuffle`,
        start_url: `/`,
        background_color: `#111827`,
        lang: `en`,
        theme_color: `#3b82f6`,
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
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-RMM4MSRDQM", // Google Analytics / GA
          //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //  optimize_id: "OPT_CONTAINER_ID",
        //  anonymize_ip: true,
        //  cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          respectDNT: true
          // Avoids sending pageview hits from custom paths
          //exclude: ["/preview/**", "/do-not-track/me/too/"],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx-pages`,
        path: `${__dirname}/src/mdx-pages`, // Directory containing your MDX files
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx"],
        gatsbyRemarkPlugins: [],
      },
      
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    }

  ],
};

export default config;
