import React from "react"
import { Link } from "gatsby"
import PracticeAreasNav from './practiceAreasNav'
import { useStaticQuery, graphql } from "gatsby"


export default ({ handleClick }) => {
  const data = useStaticQuery(graphql`
    query DesktopNavExpandedQuery {
      site {
        siteMetadata {
          navItems
        }
      }
    }
  `)

  const navigationTopics = data.site.siteMetadata.navItems
  return (
    <ul className="desktop-nav">
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
              <li className="practice-areas" key={i} onClick={handleClick}>
                {item}
                <i className="arrow down"></i>
                <PracticeAreasNav handleClick={handleClick} />
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
                <Link to="/">{item}</Link>
              </li>
            )
        }
      })}
    </ul>
  )
}
