module.exports = {
  siteMetadata: {
    title: `Random Website`,
    description: `Take me to a random website, please.`,
    titleTemplate: `Random Website`,
    author: `@mick_schroeder`,
    siteUrl: `https://randomwebsite.mickschroeder.com`,
    url: `https://randomwebsite.mickschroeder.com`,
    image: `icon-randomwebsite.png`,
    twitterUsername: `@mick_schroeder`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-RMM4MSRDQM"],
      },
      pluginConfig: {
        exclude: ["/preview/**"],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://randomwebsite.mickschroeder.com",
        sitemap: "https://randomwebsite.mickschroeder.com/sitemap.xml",
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
        name: `Random Website`,
        short_name: `RandomWebsite`,
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
        title: "Random Website",
        language: "en",
        description:
          "Take me to a random website, please.",
        twitter: {
          cardType: "website",
          site: "@mickschroeder",
          url: "https://randomwebsite.mickschroeder.com",
          site_name: "Random Website",
        },
        openGraph: {
          type: "website",
          locale: "en",
          url: "https://randomwebsite.mickschroeder.com",
          site_name: "Random Website",
          images: [
            {
              url: "https://randomwebsite.mickschroeder.com/images/randomwebsite-large-promo.png",
              width: 920,
              height: 680,
              alt: "Logo",
            },
            {
              url: "https://randomwebsite.mickschroeder.com/images/randomwebsite-small-promo.png",
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
