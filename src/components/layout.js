import React, { useEffect } from "react"
// import Head from "./head"
import Seo from "./SEO"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"

export default ({ children, headline, tagline, page }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          navItems
          metaTitle
          description
          url
          image
        }
      }
    }
  `)

  const title =
    "The McKinstry Law Firm | Criminal Defense and DUI Attorney | Denver, Colorado"
  const description = data.site.siteMetadata.description
  const url = data.site.siteMetadata.url
  const image = data.site.siteMetadata.image

  useEffect(() => {
    document.title =
      "The McKinstry Law Firm | Criminal Defense and DUI Attorney | Denver, Colorado"
    console.log(title)
  }, [])
  return (
    <div>
      <Seo title={title} description={description} url={url} image={image} />
      <Header headline={headline} tagline={tagline} page={page} />
      {children}
      <Footer />
    </div>
  )
}
