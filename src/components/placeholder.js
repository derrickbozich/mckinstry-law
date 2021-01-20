import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Placeholder(props) {
  const data = useStaticQuery(graphql`
    query PlaceholderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="placeholder">
      <h1>{data.site.siteMetadata.title}</h1>
      <p>This site is under construction.</p>
      <p className="email">mckinstrylawfirm@gmail.com</p>

      <p className="phone">303-304-9413</p>
    </div>
  )
}

export default Placeholder
