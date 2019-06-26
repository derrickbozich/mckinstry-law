import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import NavItems from "./navItems"

function Nav(props) {
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <nav className="narrow-container">
      <div>
        <h1 className="brand">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
      </div>
      <div>
        <NavItems />
      </div>
    </nav>
  )
}

export default Nav
