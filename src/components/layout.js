import React from "react"
import Head from "./head"
import Header from "./header"
import Footer from "./footer"

export default ({ children, metaTitle, metaBody, headline, tagline, page }) => (
  <div>
    <Head
      title={metaTitle}
      body={metaBody}
    />
    <Header headline={headline} tagline={tagline} page={page}  />
    {children}
    <Footer/>
  </div>
)
