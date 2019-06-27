import React from "react"
// import Head from "./head"
import Seo from "./SEO"
import Header from "./header"
import Footer from "./footer"

export default ({ children, headline, tagline, page }) => (
  <div>
    <Seo />
    <Header headline={headline} tagline={tagline} page={page}  />
    {children}
    <Footer/>
  </div>
)
