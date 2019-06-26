import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

function Hero({ children, headline, tagline, page }) {
  const data = useStaticQuery(graphql`
    query heroQuery {
      imageOne: file(relativePath: { eq: "hero.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "dui.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "felony.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFour: file(relativePath: { eq: "juvenile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFive: file(relativePath: { eq: "municipal.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageSix: file(relativePath: { eq: "domestic.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let image
  let overlay
  switch (page) {
    case "dui":
      image = data.imageTwo.childImageSharp.fluid
      overlay = true
      break
    case "felony":
      image = data.imageThree.childImageSharp.fluid
      overlay = true
      break
    case "juvenile":
      image = data.imageFour.childImageSharp.fluid
      overlay = true
      break
    case "municipal":
      image = data.imageFive.childImageSharp.fluid
      overlay = true
      break
    case "domestic":
      image = data.imageSix.childImageSharp.fluid
      overlay = true
      break
    default:
      image = data.imageOne.childImageSharp.fluid
      break
  }
  return (
    <BackgroundImage fluid={image} className={overlay ? 'hero overlay single-page-hero '+ page : 'hero ' + page}>
      {children}
      <div className="hero-content container">
        <h1 className="tag-line"> {headline} </h1>
        <p className="sub-tag-line">{tagline}</p>
      </div>
    </BackgroundImage>
  )
}

export default Hero
