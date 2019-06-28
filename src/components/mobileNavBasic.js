import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default ({ handleClick }) => {
  const data = useStaticQuery(graphql`
    query MoblieNavBasicQuery {
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
          case "About":
            if (typeof window !== 'undefined' && window.location.pathname === "/") {
              return (
                <li key={i}>
                  <a onClick={handleClick} href="/#about">
                    {item}
                  </a>
                </li>
              )
            } else {
              return (
                <li key={i}>
                  <Link onClick={handleClick} to="/#about">
                    {item}
                  </Link>
                </li>
              )
            }

          case "Practice Areas":
            return (
              <li key={i} onClick={handleClick} className="practice-areas-li">
                {item}
                <i className="arrow down"></i>
              </li>
            )

          case "Contact":
            if (typeof window !== 'undefined' && window.location.pathname === "/") {
              return (
                <li key={i}>
                  <a onClick={handleClick} href="/#contact">
                    {item}
                  </a>
                </li>
              )
            } else {
              return (
                <li key={i}>
                  <Link onClick={handleClick} to="/#contact">
                    {item}
                  </Link>
                </li>
              )
            }

          case "Attorney Profile":
            if (typeof window !== 'undefined' && window.location.pathname === "/") {
              return (
                <li key={i}>
                  <a onClick={handleClick} href="/#attorney-profile">
                    {item}
                  </a>
                </li>
              )
            } else {
              return (
                <li key={i}>
                  <Link onClick={handleClick} to="/#attorney-profile">
                    {item}
                  </Link>
                </li>
              )
            }

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
