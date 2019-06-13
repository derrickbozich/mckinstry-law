import React from "react"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"

function PracticeAreas({ data }) {
  return (
    <div className="practice-areas">
      <h1 className="section-header">Practice Areas </h1>
      <StaticQuery
        query={graphql`
          query {
            imageOne: file(relativePath: { eq: "one.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <BackgroundImage fluid={data.imageOne.childImageSharp.fluid} />
        )}
      />
      <h1 className="header">
        Drinking and Driving Offenses
      </h1>
      <div className="body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, natus, dolores. Sapiente, asperiores, aliquam! Neque nulla praesentium non obcaecati quis voluptatibus, vero quos omnis consectetur dicta repudiandae, porro tempore. Eligendi expedita eum aliquam, ullam iure nihil unde consequuntur exercitationem, molestias facilis blanditiis a veritatis nobis repellat voluptatibus beatae quod, quo excepturi fugiat laborum repudiandae? Voluptatibus vel iusto, qui quisquam voluptas tempore! Nemo, repellat nihil impedit obcaecati fugiat nam! Debitis, nemo.

      </div>

    </div>
  )
}


export default PracticeAreas
