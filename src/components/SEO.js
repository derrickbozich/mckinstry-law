import React from "react"
import { Helmet } from "react-helmet"

// import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,
      }

      const schemaData = {
        "@context": "http://www.schema.org",
        "@type": "LocalBusiness",
        name: "The McKinstry Law Firm, LLC",
        priceRange: "$$$",
        telephone: "(303) 398-7050",
        url: "www.mckinstrylawfirm.com",
        sameAs: [
          "https://www.facebook.com/The-McKinstry-Law-Firm-LLC-100817105049015/",
          "https://www.linkedin.com/company/the-mckinstry-law-firm-llc/",
          "https://www.yelp.com/biz/the-mckinstry-law-firm-denver-2",
        ],
        image:
          "https://www.mckinstrylawfirm.com/static/2b6bd0389030582b67f24bd5660149ef/055c0/about.jpg",
        description:
          "Patrick McKinstry is one of Colorado's leading DUI, Domestic Violence, and Criminal Defense Attorneys based in Denver. We value each client. That is why we adhere to providing service with diligence, integrity, and professionalism. Mr. McKinstry is dedicated to helping his clientele win their cases while maintaining strict confidentiality. Call today for a free consultation and discover how the lawyers at The McKinstry Law Firm can help you.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "44 Cook Street, Suite #100 ",
          addressLocality: "Denver",
          addressRegion: "Colorado",
          postalCode: "80206",
          addressCountry: "United States",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "39.7167326",
          longitude: "-104.9468709",
        },
        hasMap:
          "https://www.google.com/maps/place/The+McKinstry+Law+Firm,+LLC/@39.716551,-104.9482978,17z/data=!4m5!3m4!1s0x876c7fcd5ef455bb:0x619d0e660dddef9d!8m2!3d39.7167326!4d-104.9468709",
        openingHours:
          "Mo 08:30-17:00 Tu 08:30-17:00 We 08:30-17:00 Th 08:30-17:00 Fr 08:30-17:00",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "(303) 398-7050",
          contactType: "Sales",
        },
      }

      return (
        <>
          <Helmet title={seo.title}>
            <html lang="en" />

            {seo.description !== "remove" && (
              <meta name="description" content={seo.description} />
            )}

            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description !== "remove" && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description !== "remove" && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            <meta
              name="google-site-verification"
              content="Naq-Pelb5VOMDF2uW2u1GJ-Uc7Vxg1P72Qs_4WadujM"
            />

            <script type="application/ld+json">
              {JSON.stringify(schemaData)}
            </script>
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   pathname: PropTypes.string,
// }
//
// SEO.defaultProps = {
//   title: null,
//   description: null,
//   image: null,
//   pathname: null,
// }

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: metaTitle
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`
