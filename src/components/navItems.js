import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useStaticQuery, graphql } from "gatsby"

function NavItems(props) {
  const [isExpanded, setIsExpanded] = useState(false)

  const useWindowWidth = () => {
    const [width, setWidth] = useState(
      typeof window !== "undefined" && window.innerWidth
    )

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    })
    console.log(`width: ${width}`)
    return width
  }

  const width = useWindowWidth() // Our custom Hook

  const handleToggle = e => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
    console.log("click")
  }

  const data = useStaticQuery(graphql`
    query NavItemsQuery {
      site {
        siteMetadata {
          navItems
        }
      }
    }
  `)

  const navigationTopics = data.site.siteMetadata.navItems
  const breakPoint = 1000

  //Mobile View Collapsed Bars
  if (width < breakPoint && !isExpanded) {
    return (
      <FontAwesomeIcon
        className="bars"
        icon={faBars}
        onClick={e => handleToggle(e)}
        size="lg"
      />
    )
  } else if (width < breakPoint && isExpanded) {
    return (
      <div>
        <FontAwesomeIcon
          className="bars"
          icon={faBars}
          onClick={e => handleToggle(e)}
          size="lg"
        />
        <ul className="mobile-nav">
          {navigationTopics.map((item, i) => {
            return <li key={i}> {item} </li>
          })}
        </ul>
      </div>
    )
  } else {
    return (
      <ul className="desktop-nav">
        {navigationTopics.map((item, i) => {
          switch (item) {
            case 'About The Firm':
              return(
                <li key={i}>
                 <Link to='/'>{item}</Link>
                </li>

              )
              break;
            case 'Practice Areas':
              return(
                <li key={i}>
                 {item}
                </li>

              )
              break;
            case 'Contact':
              return(
                <li key={i}>
                 <Link to='/'>{item}</Link>
                </li>

              )
              break;
            case 'Attorney Profile':
              return(
                <li key={i}>
                 <Link to='/'>{item}</Link>
                </li>

              )
              break;
            default:
            return(
              <li key={i}>
               <Link to='/'>{item}</Link>
              </li>

            )

          }

        })}
      </ul>
    )
  }
}

export default NavItems
