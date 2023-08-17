module.exports = {
  siteMetadata: {
    title: `Press Shuffle`,
    description: `Take me to a random website, please.`,
    titleTemplate: `Press Shuffle`,
    author: `@mick_schroeder`,
    siteUrl: `https://pressshuffle.com`,
    url: `https://pressshuffle.com`,
    image: `icon-randomwebsite.png`,
    twitterUsername: `@mick_schroeder`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-RMM4MSRDQM"],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,

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
      options: {
        name: `channels`,
        path: `src/json/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Press Shuffle`,
        short_name: `PressShuffle`,
        icon: `src/images/assets/icon-random-website-square.svg`,
        start_url: `.`,
        background_color: `#000`,
        theme_color: `#1F2838`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        title: "Press Shuffle",
        language: "en",
        description: "Take me to a random website, please.",
        twitter: {
          cardType: "website",
          site: "@mickschroeder",
          url: "https://pressshuffle.com",
          site_name: "Press Shuffle",
        },
        openGraph: {
          type: "website",
          locale: "en",
          url: "https://pressshuffle.com",
          site_name: "Press Shuffle",
          images: [
            {
              url: "https://pressshuffle.com/images/randomwebsite-large-promo.png",
              width: 920,
              height: 680,
              alt: "Logo",
            },
            {
              url: "https://pressshuffle.com/images/randomwebsite-small-promo.png",
              width: 440,
              height: 280,
              alt: "Logo",
            },
          ],
        },
      },
    },
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
