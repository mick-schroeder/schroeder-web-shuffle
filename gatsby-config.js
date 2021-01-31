module.exports = {
  siteMetadata: {
    title: `Web Shuffle`,
    description: `A passive web browsing experience. Channel surf the web. 🔀 Shuffle and be sent to a random 🔗 link from a curated selection of the best sites on the 🌐 Internet.`,
    titleTemplate: `%s | Web Shuffle`,
    author: `@mick_schroeder`,
    siteUrl: `https://webshuffle.mickschroeder.com`,
    url: `https://webshuffle.mickschroeder.com`,
    image: `icon-webingest.png`,
    twitterUsername: `@mick_schroeder`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-RMM4MSRDQM"],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://webshuffle.mickschroeder.com",
        sitemap: "https://webshuffle.mickschroeder.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Images`,
        path: `src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      name: `data`,
      options: {
        path: `src/json/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web Shuffle`,
        short_name: `WebIngest`,
        icon: `src/images/assets/icon-webingest.svg`,
        start_url: `.`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/index.css`],
      },
    },
  ],
}
