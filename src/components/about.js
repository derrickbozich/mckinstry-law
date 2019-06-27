import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
// import ScrollableAnchor from "react-scrollable-anchor"

function About() {
  return (
    <div className="about" id="about">
      <div className="narrow-container">
      <h1 className="header-mobile">About The Firm</h1>

        <div className="content">
          <StaticQuery
            query={graphql`
              query {
                imageOne: file(relativePath: { eq: "about.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => (
              <Img
                fluid={data.imageOne.childImageSharp.fluid}
                className="about-image"
                alt='Patrick McKinstry, founder of The McKinstry Law Firm'
              />
            )}
          />
          <div className="text">
            <h1 className="header-desktop">About The Firm</h1>
            <div className="body">
              The McKinstry Law Firm is dedicated exclusively to the practice of
              criminal defense law in Colorado, and serves clients on the front
              range and in jurisdictions along the I-70 corridor. The firm is
              experienced in the preparation and litigation of state felony and
              misdemeanor charges, DUI and related vehicular offenses, juvenile
              offenses, domestic violence, municipal ordinance violations, and
              general violations. Mental illness is often a factor when serious
              criminal charges are filed, and The McKinstry Law Firm is
              experienced in the practice of mental health law in Colorado. The
              McKinstry law firm adheres to the highest standards of
              professionalism, diligence and integrity. Call today for a free
              and confidential consultation.
            </div>

            <a href="/#attorney-profile">
              <div className="content-footer meet-patrick">
                Meet Patrick McKinstry
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
