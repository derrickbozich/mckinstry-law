import React, { useState, useEffect } from "react"
import Bars from "./bars"
import MobileNavBasic from "./mobileNavBasic"
import DesktopNav from "./desktopNav"
import MobileNavExpanded from "./mobileNavExpanded"
import DesktopNavExpanded from "./desktopNavExpanded"

function NavItems() {
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
    setPracticeAreas(false)
  }

  useEffect(()=>{
    // console.log(`practiceAreas: ${practiceAreas}`);
  })



  const handleClick = e => {
    // e.preventDefault()


    if (e.target.innerText.includes("Practice Areas")) {
      setPracticeAreas(!practiceAreas)
      // setIsExpanded(false)
      // console.log(`practice areas click` );
    } else if (e.target.innerText.indexOf("Practice Areas") === -1) {
        setPracticeAreas(false)
        setIsExpanded(false)
    }
  }

  const breakPoint = 1000

  //Mobile View Collapsed Bars
  if (width < breakPoint && !isExpanded && !practiceAreas) {
    return <Bars onClick={e => handleToggle(e)} />
  } else if (width < breakPoint && isExpanded && !practiceAreas) {
    return (
      <div>
        <Bars onClick={e => handleToggle(e)} />
        <MobileNavBasic handleClick={handleClick} />
      </div>
    )
  } else if (width < breakPoint && isExpanded && practiceAreas) {
    return (
      <div>
        <Bars onClick={e => handleToggle(e)} />
        <MobileNavExpanded handleClick={handleClick} />
      </div>
    )
  }else if (width < breakPoint && !isExpanded && practiceAreas ) {
    return (
      <div>
        <Bars onClick={e => handleToggle(e)} />
        <MobileNavBasic handleClick={handleClick} />
      </div>
    )

  } else if (width > breakPoint && practiceAreas) {
    return <DesktopNavExpanded handleClick={handleClick} />
  } else if (width > breakPoint && !practiceAreas) {
    return <DesktopNav handleClick={handleClick} />
  } else {
    return 'default'
  }
}

export default NavItems
