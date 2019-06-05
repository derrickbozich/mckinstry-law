import React from "react"
import Container from "../components/container"
import Nav from "../components/nav"
import Capabilities from "../components/capabilities"
import Img from "gatsby-image"
import { graphql } from 'gatsby'

export default ({ data }) => (
  <div>

      <div className='nav-wrap'>
        <Nav isHeader={true}/>
      </div>


    <Img fluid={data.imageOne.childImageSharp.fluid} />
    <Capabilities/>
  </div>
)

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
