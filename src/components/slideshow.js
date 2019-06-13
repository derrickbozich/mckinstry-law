import React, { useState, useEffect } from "react"
// import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

function SlideShow() {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "slides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )
  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)

  useEffect(() => {
    let id = setInterval(() => {
      handleNext()
    }, 8000)

    return () => {
      clearInterval(id)
    }
  })

  const { node } = allFile.edges[index]
  return (
    <div>
      <div>
        <BackgroundImage
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, " ").substring(2)}
          className="slideshow fade"
        >
          <h1>Your Best Defense</h1>
        </BackgroundImage>
      </div>
      <div>
        <button onClick={() => handlePrevious()}>Previous</button>
        <button onClick={() => handleNext()}>Next</button>
      </div>
    </div>
  )
}

export default SlideShow
