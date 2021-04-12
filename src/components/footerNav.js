import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default ({ handleClick, children, footer }) => {
  const data = useStaticQuery(graphql`
    query FooterNavQuery {
      site {
        siteMetadata {
          navItems
        }
      }
    }
  `)

  const navigationTopics = data.site.siteMetadata.navItems

  return (
    <div>
      <ul className="footer-nav">
        {navigationTopics.map((item, i) => {
          switch (item) {
            case "About":
              return (
                <li key={i}>
                  <Link to="/#about">{item}</Link>
                </li>
              )

            case "Practice Areas":
              return (
                <li key={i}>
                  <Link to="/#practice-areas-id">{item}</Link>
                </li>
              )

            case "Contact":
              return (
                <li key={i}>
                  <Link to="/#contact">{item}</Link>
                </li>
              )

            case "Attorney Profile":
              return (
                <li key={i}>
                  <Link to="/#attorney-profile">{item}</Link>
                </li>
              )

            default:
              return (
                <li key={i}>
                  <Link className="default" to="/">
                    {item}
                  </Link>
                </li>
              )
          }
        })}
      </ul>
    </div>
  )
}
