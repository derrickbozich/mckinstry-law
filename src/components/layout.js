import React from "react"
import Seo from "./SEO"
import Header from "./header"
import Footer from "./footer"

export default ({ children, headline, tagline, page }) => {
  return (
    <div>
      <Seo />
      <Header headline={headline} tagline={tagline} page={page} />
      {children}
      <Footer />
    </div>
  )
}
