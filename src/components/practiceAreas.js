import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

function PracticeAreas() {
  const data = useStaticQuery(graphql`
    query PracticeAreasQuery {
      imageOne: file(relativePath: { eq: "dui.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "dui.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "dui.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFour: file(relativePath: { eq: "dui.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFive: file(relativePath: { eq: "dui.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="practice-areas narrow-container">
      <h1 className="section-header">Practice Areas </h1>
      <p className="section-subheader">Practice Areas </p>

      <div className="box">
        <div className="text">
          <h1 className="header">DUI, DUI-Drug and Related Violations</h1>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            natus, dolores. Sapiente, asperiores, aliquam! Neque nulla
            praesentium non obcaecati quis voluptatibus, vero quos omnis
            consectetur dicta repudiandae, porro tempore. Eligendi expedita eum
            aliquam, ullam iure nihil unde consequuntur exercitationem,
            molestias facilis blanditiis a veritatis nobis repellat voluptatibus
            beatae quod, quo excepturi fugiat laborum repudiandae? Voluptatibus
            vel iusto, qui quisquam voluptas tempore! Nemo, repellat nihil
            impedit obcaecati fugiat nam! Debitis, nemo.
          </div>
          <div className="link">Learn More</div>
        </div>

        <BackgroundImage
          fluid={data.imageOne.childImageSharp.fluid}
          className="image"
        />
      </div>

      <div className="box">
        <div className="text">
          <h1 className="header">State Felony and Misdemeanor</h1>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            natus, dolores. Sapiente, asperiores, aliquam! Neque nulla
            praesentium non obcaecati quis voluptatibus, vero quos omnis
            consectetur dicta repudiandae, porro tempore. Eligendi expedita eum
            aliquam, ullam iure nihil unde consequuntur exercitationem,
            molestias facilis blanditiis a veritatis nobis repellat voluptatibus
            beatae quod, quo excepturi fugiat laborum repudiandae? Voluptatibus
            vel iusto, qui quisquam voluptas tempore! Nemo, repellat nihil
            impedit obcaecati fugiat nam! Debitis, nemo.
          </div>
          <div className="link">Learn More</div>
        </div>

        <BackgroundImage
          fluid={data.imageThree.childImageSharp.fluid}
          className="image"
        />
      </div>

      <div className="box">
        <div className="text">
          <h1 className="header">Municipal Ordinance and General Violations</h1>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            natus, dolores. Sapiente, asperiores, aliquam! Neque nulla
            praesentium non obcaecati quis voluptatibus, vero quos omnis
            consectetur dicta repudiandae, porro tempore. Eligendi expedita eum
            aliquam, ullam iure nihil unde consequuntur exercitationem,
            molestias facilis blanditiis a veritatis nobis repellat voluptatibus
            beatae quod, quo excepturi fugiat laborum repudiandae? Voluptatibus
            vel iusto, qui quisquam voluptas tempore! Nemo, repellat nihil
            impedit obcaecati fugiat nam! Debitis, nemo.
          </div>
          <div className="link">Learn More</div>
        </div>

        <BackgroundImage
          fluid={data.imageFour.childImageSharp.fluid}
          className="image"
        />
      </div>

      <div className="box">
        <div className="text">
          <h1 className="header">Domestic Violence</h1>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            natus, dolores. Sapiente, asperiores, aliquam! Neque nulla
            praesentium non obcaecati quis voluptatibus, vero quos omnis
            consectetur dicta repudiandae, porro tempore. Eligendi expedita eum
            aliquam, ullam iure nihil unde consequuntur exercitationem,
            molestias facilis blanditiis a veritatis nobis repellat voluptatibus
            beatae quod, quo excepturi fugiat laborum repudiandae? Voluptatibus
            vel iusto, qui quisquam voluptas tempore! Nemo, repellat nihil
            impedit obcaecati fugiat nam! Debitis, nemo.
          </div>
          <div className="link">Learn More</div>
        </div>

        <BackgroundImage
          fluid={data.imageFive.childImageSharp.fluid}
          className="image"
        />
      </div>
    </div>
  )
}

export default PracticeAreas
