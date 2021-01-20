/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `The McKinstry Law Firm`,
    metaTitle: `The McKinstry Law Firm | Denver DUI and Criminal Defense Attorney`,
    navItems: ["About", "Practice Areas", "Attorney Profile", "Contact"],
    phoneNumber: `(303) 398-7050`,
    telPhoneNumber: `1-303-398-7050`,
    email: `patrick@mckinstrylawfirm.com`,
    image: "/images/about.jpg",
    url: "https://www.mckinstrylawfirm.com",
    siteUrl: "https://www.mckinstrylawfirm.com",
    description:
      "Patrick McKinstry is one of Colorado's leading DUI and Criminal Defense Attorneys based in Denver. Call today for a free consultation and discover how The McKinstry Law Firm can help you.",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-187524931-1", // Google Analytics / GA
          "G-M039N3ZXKW",
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
  ],
}
