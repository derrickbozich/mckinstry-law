import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql, Link } from "gatsby"

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
      imageTwo: file(relativePath: { eq: "felony.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "juvenile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFour: file(relativePath: { eq: "municipal.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFive: file(relativePath: { eq: "domestic.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="practice-areas" id="practice-areas-id">
      <div className="narrow-container content">
        <h1 className="section-header">Practice Areas </h1>

        <Link className="p-area" to="/dui#dui">
          <div className="box">
            <div className="text">
              <h1 className="header">DUI, DUI-Drug and Related Violations</h1>
              <div className="body">
                While DUI is one of the most commonly charged traffic offenses
                in Colorado, it is also a serious criminal offense that has the
                potential to impact an individual’s ...
              </div>
              <div className="content-footer">Learn More</div>
            </div>

            <BackgroundImage
              fluid={data.imageOne.childImageSharp.fluid}
              className="image"
            />
          </div>
        </Link>

        <Link className="p-area" to="/state-felony-and-misdemeanor">
          <div className="box">
            <div className="text">
              <h1 className="header">State Felony and Misdemeanor</h1>
              <div className="body">
                If you are facing misdemeanor or felony charges in the state of
                Colorado, then you already know how frightening, disruptive, and
                disorienting the experience...
              </div>
              <div className="content-footer">Learn More</div>
            </div>

            <BackgroundImage
              fluid={data.imageTwo.childImageSharp.fluid}
              className="image"
            />
          </div>
        </Link>

        <Link className="p-area" to="/juvenile-offenses">
          <div className="box">
            <div className="text">
              <h1 className="header">Juvenile Offenses</h1>
              <div className="body">
                In the state of Colorado, juveniles can be charged with many of
                the same crimes that adults may face, but the justice system is
                designed to treat them differently...
              </div>
              <div className="content-footer">Learn More</div>
            </div>

            <BackgroundImage
              fluid={data.imageThree.childImageSharp.fluid}
              className="image"
            />
          </div>
        </Link>

        <Link className="p-area" to="/municipal">
          <div className="box">
            <div className="text">
              <h1 className="header">
                Municipal Ordinance and General Violations
              </h1>
              <div className="body">
                While DUI is one of the most commonly charged traffic offenses
                in Colorado, it is also a serious criminal offense that has the
                potential to impact an individual’s …
              </div>
              <div className="content-footer">Learn More</div>
            </div>

            <BackgroundImage
              fluid={data.imageFour.childImageSharp.fluid}
              className="image"
            />
          </div>
        </Link>

        <Link className="p-area" to="/domestic-violence">
          <div className="box">
            <div className="text">
              <h1 className="header">Domestic Violence</h1>
              <div className="body">
                Domestic violence is a legal term, and a sentence enhancer, that
                attaches to a criminal offense allegedly committed by one person
                against another person...
              </div>
              <div className="content-footer">Learn More</div>
            </div>

            <BackgroundImage
              fluid={data.imageFive.childImageSharp.fluid}
              className="image"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default PracticeAreas
