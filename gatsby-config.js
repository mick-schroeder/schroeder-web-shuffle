module.exports = {
  siteMetadata: {
    title: `Web Shuffle`,
    description: `Shuffle to the best sites across the web.`,
    titleTemplate: `%s | Web Shuffle`,
    author: `@mick_schroeder`,
    siteUrl: `https://webshuffle.mickschroeder.com`,
    url: `https://webshuffle.mickschroeder.com`,
    image: `icon-webshuffle.png`,
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
        short_name: `WebShuffle`,
        icon: `src/images/assets/icon-web-shuffle-square.svg`,
        start_url: `.`,
        background_color: `#000`,
        theme_color: `#1F2838`,
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
