import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

function PracticeAreasDropdown({isExpanded}) {

  if (isExpanded) {
    return(
      <li>
        is expanded
      </li>

    )


  } else {
    return(
      <li >
        Practice Areas D
      </li>
    )


  }


}

export default PracticeAreasDropdown
