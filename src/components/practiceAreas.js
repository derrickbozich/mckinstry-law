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
    <div className="practice-areas narrow-container">
      <h1 className="section-header">Practice Areas </h1>
      <p className="section-subheader">Practice Areas </p>

      <Link className="p-area" to="/dui">
        <div className="box">
          <div className="text">
            <h1 className="header">DUI, DUI-Drug and Related Violations</h1>
            <div className="body">
              While DUI is one of the most commonly charged traffic offenses in
              Colorado, it is also a serious criminal offense that has the
              potential to impact an individual’s financial, professional, and
              personal life. Due to the serious nature of the potential
              consequences of a DUI conviction, it is essential to have a
              highly-experienced attorney who not only knows Colorado DUI law,
              but who also knows the court system, the science of DUI testing,
              and the time-sensitive nature of the procedures and filings in DUI
              matters. If you choose to go to trial, you need an attorney who
              possesses the confidence, experience, and technical proficiency
              necessary to vigorously and effectively defend your rights and
              interests in front of a jury.
            </div>
            <div className="link">Learn More</div>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
              natus, dolores. Sapiente, asperiores, aliquam! Neque nulla
              praesentium non obcaecati quis voluptatibus, vero quos omnis
              consectetur dicta repudiandae, porro tempore. Eligendi expedita
              eum aliquam, ullam iure nihil unde consequuntur exercitationem,
              molestias facilis blanditiis a veritatis nobis repellat
              voluptatibus beatae quod, quo excepturi fugiat laborum
              repudiandae? Voluptatibus vel iusto, qui quisquam voluptas
              tempore! Nemo, repellat nihil impedit obcaecati fugiat nam!
              Debitis, nemo.
            </div>
            <div className="link">Learn More</div>
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
              designed to treat them differently. In juvenile offenses, there is
              an emphasis on rehabilitation, but serious charges against a minor
              can still lead to serious consequences, including incarceration in
              a state facility.
            </div>
            <div className="link">Learn More</div>
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
              In the state of Colorado, many cities and towns draft their own
              rules and regulations. Many of these ordinances relate to public
              order and safety, such as assault, theft, and solicitation for
              prostitution, as well as weapons violations and threats. Municipal
              Ordinance crimes can also be charged as ‘domestic violence’
              offenses, with many of the same consequences as state domestic
              violence charges. Furthermore, a guilty plea or conviction at
              trial on a municipal charge can trigger violations of a deferred
              judgment, supervised probation or parole in other cases.
            </div>
            <div className="link">Learn More</div>
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
              against another person who share an intimate relationship. The
              list of offenses that can form the basis for a domestic violence
              charge is lengthy. It ranges from serious felonies, such as Second
              Degree Assault, to misdemeanor allegations of harassment. Domestic
              violence may also be charged in Municipal Court, and the penalties
              may include fines and lengthy confinement. The underlying offense
              in most domestic violence cases is an act committed as a means of
              coercion, control, punishment, intimidation, or revenge against an
              intimate partner. Examples include threats, intimidation, criminal
              mischief, assault, harassment, trespass, and even charges of
              disturbing the peace.
            </div>
            <div className="link">Learn More</div>
          </div>

          <BackgroundImage
            fluid={data.imageFive.childImageSharp.fluid}
            className="image"
          />
        </div>
      </Link>
    </div>
  )
}

export default PracticeAreas
