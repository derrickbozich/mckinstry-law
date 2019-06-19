import React from "react"
import { Link } from "gatsby"
import PracticeAreasNav from "./practiceAreasNav"
import { useStaticQuery, graphql } from "gatsby"

export default ({ handleClick }) => {
  const data = useStaticQuery(graphql`
    query MoblieNavExpandedQuery {
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
              <li className="practice-areas-li" key={i} onClick={handleClick}>
                {item}
                <i className="arrow down"></i>
                <PracticeAreasNav handleClick={handleClick} />
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
