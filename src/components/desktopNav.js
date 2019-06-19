import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default ({ handleClick, children }) => {
  const data = useStaticQuery(graphql`
    query DesktopNavQuery {
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

      <ul className="desktop-nav">
        {children ? <li>{children}</li> : ''}


        {navigationTopics.map((item, i) => {
          switch (item) {
            case "About The Firm":
              return (
                <li key={i}>
                  <Link to="/">{item}</Link>
                </li>
              )

            case "Practice Areas":
              if (children) {
                return (
                  <li key={i}>
                    <Link to="/">{item}</Link>
                  </li>
                )
              } else {
                return (
                  <li className="practice-areas" key={i} onClick={handleClick}>
                    {item}
                    <i className="arrow down"></i>
                  </li>
                )
              }


            case "Contact":
              return (
                <li key={i}>
                  <Link to="/">{item}</Link>
                </li>
              )

            case "Attorney Profile":
              return (
                <li key={i}>
                  <Link to="/">{item}</Link>
                </li>
              )

            default:
              return (
                <li key={i}>
                  <Link to="/">{item}</Link>
                </li>
              )
          }
        })}
      </ul>
    </div>
  )
}
