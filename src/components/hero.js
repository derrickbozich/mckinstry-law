import React from "react"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"

function Hero({ children }) {
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
        <BackgroundImage
          fluid={data.imageOne.childImageSharp.fluid}
          className="hero"
        >
          {children}
          <div className="content container">
            <h1 className="tag-line">Your Best Defense.</h1>
            <p className="sub-tag-line">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              tenetur assumenda officia provident explicabo porro, ipsa harum
              molestias.
            </p>
          </div>
        </BackgroundImage>
      )}
    />
  )
}

export default Hero
