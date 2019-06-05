import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import NavItems from './navItems'

function Nav(props){

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
          <NavItems/>
      </div>
    </nav>
  )
}

export default Nav;
