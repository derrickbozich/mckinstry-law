import React from "react"
import Seo from "./SEO"
import Header from "./header"
import Footer from "./footer"

export default ({ children, headline, tagline, page, title, description, subPage }) => {
  return (
    <div>
      <Seo title={title} description={description} />
      <Header headline={headline} tagline={tagline} page={page} subPage={subPage}  />
      {children}
      <Footer />
    </div>
  )
}
