import React from 'react'
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

function Hero(){
  return (
    <StaticQuery
      query={graphql`
        query {
          imageOne: file(relativePath: { eq: "hero.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.imageOne.childImageSharp.fluid} />
      )}
    />
  )


}

export default Hero;
