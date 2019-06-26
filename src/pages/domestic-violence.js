import React from "react"
import Layout from "../components/layout"
import HeroFooter from "../components/heroFooter"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <Layout>
    <HeroFooter title="Domestic Violence" tag="tagline" id="domestic" />
    <div className="single-page narrow-container domestic-violence">
      <h1 className="header">Domestic Violence</h1>
      <div className="wrap">
        <div className="big-para">
          Domestic violence is a legal term, and a sentence enhancer, that
          attaches to a criminal offense allegedly committed by one person
          against another person who share an intimate relationship. The list of
          offenses that can form the basis for a domestic violence charge is
          lengthy. It ranges from serious felonies, such as Second Degree
          Assault, to misdemeanor allegations of harassment. Domestic violence
          may also be charged in Municipal Court, and the penalties may include
          fines and lengthy confinement. The underlying offense in most domestic
          violence cases is an act committed as a means of coercion, control,
          punishment, intimidation, or revenge against an intimate partner.
          Examples include threats, intimidation, criminal mischief, assault,
          harassment, trespass, and even charges of disturbing the peace.
        </div>
        <StaticQuery
          query={graphql`
            query {
              imageOne: file(relativePath: { eq: "domestic.jpeg" }) {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => (
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              className="image"
            />
          )}
        />
      </div>
      <div className="small-para">
        If you are facing domestic violence charges, whether in District,
        County, or Municipal Court, you risk serious consequences to your
        reputation, your career, and your liberty. You need an attorney with
        extensive experience in handling these cases, and who can guide you
        through the judicial process while protecting your rights and interests.
        If you and your lawyer determine that it’s in your best interest to go
        to trial, you need a litigator who will hold the government to its
        burden of proof and do everything possible to expose and exploit the
        weaknesses in the state’s case.
      </div>
    </div>
  </Layout>
)
