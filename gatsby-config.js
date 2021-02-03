/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `The McKinstry Law Firm`,
    metaTitle: `Denver Criminal Defense Attorney | The McKinstry Law Firm, LLC`,
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
      resolve: "gatsby-plugin-htaccess",
      options: {
        // RewriteBase: "/custom/",
        // https: true,
        // www: true,
        // SymLinksIfOwnerMatch: true,
        // host: "www.mydomain.com", // if 'www' is set to 'false', be sure to also remove it here!
       //  ErrorDocument: `
       //   ErrorDocument 401 /error_pages/401.html
       //   ErrorDocument 404 /error_pages/404.html
       //   ErrorDocument 500 /error_pages/500.html
       // `,
        redirect: [
          "RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]",
          {
            from: "mckinstry-law-staging.herokuapp.com/dui",
            to: "mckinstry-law-staging.herokuapp.com/denver-dui-lawyer",
          },
          // {
          //   from: "my-other-domain.com",
          //   to: "mydomain.com",
          // },
        ],
        custom: `
           # This is a custom rule!
           # This is a another custom rule!
       `,
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
