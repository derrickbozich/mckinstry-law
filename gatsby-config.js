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
    email: `mckinstrylawfirm@gmail.com`,
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
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
  ],
}
