import React, { useState, useEffect } from "react"

import Nav from "./nav"
import Hero from "./hero"
import Head from "./head"

export default ({ children, headline, tagline, page }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [practiceAreas, setPracticeAreas] = useState(false)

  const useWindowWidth = () => {
    const [width, setWidth] = useState(
      typeof window !== "undefined" && window.innerWidth
    )

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
        if (window.innerWidth > breakPoint) {
          setIsExpanded(false);
          setPracticeAreas(false);
        }

      }
      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    })
    return width
  }

  const width = useWindowWidth() // Our custom Hook

  const handleToggle = e => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }



  const handleClick = e => {
    // e.preventDefault()

    if (e.target.innerText === "Practice Areas") {
      setPracticeAreas(!practiceAreas)
    } else if (e.target.innerText.includes("Practice Areas")) {
      setPracticeAreas(false)
    } else {
      setIsExpanded(!isExpanded)
    }
  }

  const breakPoint = 1000


  return(
    <div>
      <Head />
      <Hero handleClick={handleClick} headline={headline} tagline={tagline} page={page}>
        <Nav handleClick={handleClick} handleToggle={handleToggle} width={width} isExpanded={isExpanded} practiceAreas={practiceAreas} breakPoint={breakPoint} />
      </Hero>
    </div>

  )

}
