import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default ({ handleClick, children, footer }) => {
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
        {children ? <li>{children}</li> : ""}

        {navigationTopics.map((item, i) => {
          switch (item) {
            case "About":
              if (typeof window !== 'undefined' && window.location.pathname === "/") {
                return (
                  <li key={i}>
                    <a href="/#about">{item}</a>
                  </li>
                )
              } else {
                return (
                  <li key={i}>
                    <Link to="/#about">{item}</Link>
                  </li>
                )
              }

            case "Practice Areas":
              if (footer) {
                return (
                  <li key={i}>
                    <Link to="/#practice-areas-id">{item}</Link>
                  </li>
                )
              } else {
                return (
                  <li
                    data-dest=".practice-areas"
                    className="practice-areas"
                    key={i}
                    onClick={handleClick}
                  >
                    {item}
                    <i className="arrow down"></i>
                  </li>
                )
              }

            case "Contact":
              if (typeof window !== 'undefined' && window.location.pathname === "/") {
                return (
                  <li key={i}>
                    <a href="/#contact">{item}</a>
                  </li>
                )
              } else {
                return (
                  <li key={i}>
                    <Link to="/#contact">{item}</Link>
                  </li>
                )
              }

            case "Attorney Profile":
              if (typeof window !== 'undefined' && window.location.pathname === "/") {
                return (
                  <li key={i}>
                    <a href="/#attorney-profile">{item}</a>
                  </li>
                )
              } else {
                return (
                  <li key={i}>
                    <Link to="/#attorney-profile">{item}</Link>
                  </li>
                )
              }

            default:
              return (
                <li key={i}>
                  <Link className="default" to="/">{item}</Link>
                </li>
              )
          }
        })}
      </ul>
    </div>
  )
}
