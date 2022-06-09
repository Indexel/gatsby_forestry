module.exports = {
  siteMetadata: {
    title: `Indexel Eco-conception`,
    description: `Ce site web est conçu pour être le plus écologique possible.`,
    author: `JulienFR`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/content/post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nav-home`,
        path: `${__dirname}/src/content/navBar`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hero`,
        path: `${__dirname}/src/content/hero`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `chapo`,
        path: `${__dirname}/src/content/chapo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `table`,
        path: `${__dirname}/src/content/table`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/uploads/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
