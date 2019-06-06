import React from "react"
import Container from "../components/container"
import Nav from "../components/nav"
import Capabilities from "../components/capabilities"
import PracticeAreas from "../components/practiceAreas"
import WhyUs from "../components/whyUs"
import Img from "gatsby-image"
import {  graphql } from "gatsby"

export default ({ data }) => (
  <div>
    <div className="nav-wrap">
      <Nav />
    </div>

    <Img fluid={data.imageOne.childImageSharp.fluid} />
    <Capabilities />
    <PracticeAreas />
    <WhyUs />
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
