import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import NavItems from './navItems'


function Nav(props){

  const {isHeader} = props;

  // const [isExpanded, setIsExpanded] = useState(false);

  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



  return (
    <nav>
      <div>
        <h1 className='brand'>{data.site.siteMetadata.title}</h1>
      </div>
      <div>
          <NavItems isHeader= {isHeader} />
      </div>
    </nav>
  )
}

export default Nav;
