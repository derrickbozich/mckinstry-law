import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

function Hero({ children, headline, tagline, page }) {
  const data = useStaticQuery(graphql`
    query heroQuery {
      imageOne: file(relativePath: { eq: "hero-crop.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "dui-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "felony-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFour: file(relativePath: { eq: "juvenile-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFive: file(relativePath: { eq: "municipal-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageSix: file(relativePath: { eq: "domestic-bg.jpg" }) {
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
  let description
  switch (page) {
    case "dui":
      image = data.imageTwo.childImageSharp.fluid
      overlay = true
      description = 'Car Keys resting on the side of a glass of whiskey, indicating that one might be driving under the influence DUI'
      break
    case "felony":
      image = data.imageThree.childImageSharp.fluid
      overlay = true
      description = 'Alcatraz Prison, an view of the prison cells. State Felony And Misdemeanor'
      break
    case "juvenile":
      image = data.imageFour.childImageSharp.fluid
      overlay = true
      description = 'A teenager wearing a hoodie, in handcuffs, sitting down with their back against a wall. Their forehead is on their knee. Juvenile Offenses'
      break
    case "municipal":
      image = data.imageFive.childImageSharp.fluid
      overlay = true
      description = 'A view of the skyline of Denver, Colorado. Municipal Ordinance and General Violations'
      break
    case "domestic":
      image = data.imageSix.childImageSharp.fluid
      overlay = true
      description = 'A person grabbing another\'s arm in an attempt to defend themselves'
      break
    default:
      image = data.imageOne.childImageSharp.fluid
      break
  }
  return (
    <BackgroundImage role='img' aria-label={description} fluid={image} className={overlay ? 'hero overlay single-page-hero '+ page : 'hero ' + page}>
      {children}
      <div className={`hero-content container ${page}`}>
        <h1 className="tag-line"> {headline} </h1>
        <p className="sub-tag-line">{tagline}</p>
      </div>
    </BackgroundImage>
  )
}

export default Hero
