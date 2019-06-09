import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function NavItems(props) {

  const [isExpanded, setIsExpanded] = useState(false)

  const useWindowWidth = () => {

    const [width, setWidth] = useState(typeof window !== 'undefined' && window.innerWidth)

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

  //Mobile View Collapsed Bars
  if (width < 700 && !isExpanded) {
    return (
      <FontAwesomeIcon
        className="bars"
        icon={faBars}
        onClick={e => handleToggle(e)}
      />
    )
  } else if (width < 700 && isExpanded) {
    return (
      <div>
        <FontAwesomeIcon
          className="bars"
          icon={faBars}
          onClick={e => handleToggle(e)}
        />
        <ul className='mobile-nav'>
          <li>Practice Areas</li>
          <li>Why Us</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  } else {
    return (
      <ul className='desktop-nav'>
        <li>Practice Areas</li>
        <li>Why Us</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    )
  }
}

export default NavItems
