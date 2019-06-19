import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function BrandBar() {
  const data = useStaticQuery(graphql`
    query BrandBarQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title
  return (
    <div className="brand-bar">
      <div className="title"> {title} </div>
      <div className="tagline">Your Best Defense.</div>
    </div>
  )
}

export default BrandBar
