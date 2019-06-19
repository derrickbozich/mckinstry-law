import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default ( {handleClick}) => {
  const data = useStaticQuery(graphql`
    query MoblieNaveBasicQuery {
      site {
        siteMetadata {
          navItems
        }
      }
    }
  `)

  const navigationTopics = data.site.siteMetadata.navItems
  return (
    <ul className="mobile-nav">
      {navigationTopics.map((item, i) => {
        switch (item) {
          case "About The Firm":
            return (
              <li key={i}>
                <Link to="/" onClick={handleClick}>
                  {item}
                </Link>
              </li>
            )

          case "Practice Areas":
            return (
              <li key={i} onClick={handleClick} className="practice-areas-li">
                {item}
                <i className="arrow down"></i>
              </li>
            )

          case "Contact":
            return (
              <li key={i}>
                <Link to="/" onClick={handleClick}>
                  {item}
                </Link>
              </li>
            )

          case "Attorney Profile":
            return (
              <li key={i}>
                <Link to="/" onClick={handleClick}>
                  {item}
                </Link>
              </li>
            )

          default:
            return (
              <li key={i}>
                <Link to="/" onClick={handleClick}>
                  {item}
                </Link>
              </li>
            )
        }
      })}
    </ul>
  )
}
