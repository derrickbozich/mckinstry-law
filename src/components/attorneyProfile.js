import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function AttorneyProfile() {
  const data = useStaticQuery(graphql`
    query AttorneyProfileQuery {
      imageOne: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="attorney-profile narrow-container" id="attorney-profile">
      <h1 className="header"> Attorney Profile </h1>
      <div className="main-content">
        <div className="about">
          <h1 className="title">Patrick McKinstry</h1>
          <div className="body">
            <p>
              For almost fifteen years Mr. McKinstry has litigated in District,
              County, Juvenile, and Municipal Courts in the Denver metropolitan
              area. He has first-chaired more than one hundred and fifty jury
              trials, and in excess of a thousand trials to the Court.
            </p>
            <p>
              Mr. McKinstry is a graduate of the National Institute for Trial
              Advocacy’s National Session, an intensive two-week trial training
              program, as well as the Colorado Bar Association’s Leadership
              Training program.
            </p>
            <p>
              Mr. McKinstry earned his law degree and MBA at Arizona State
              University.
            </p>
            <p>
              Prior to law school, Mr. McKinstry served as an officer in the
              United States Marine Corps. He spent his career in the Marines as
              a logistician and Aide-de-Camp. Mr. McKinstry was honorably
              discharged with the rank of Captain after his time in the Fleet
              Marine Force Atlantic, and was awarded the Navy and Marine Corps
              Commendation Medal.
            </p>
          </div>
        </div>
        <Img fluid={data.imageOne.childImageSharp.fluid} className="image" />

      </div>
      <div className="wrap">
        <div className="training box">
          <h1 className="title">Training</h1>
          <div className="body">
            <div className="chunk">
              <div className="bold">
                Colorado Bar Association Leadership Training{" "}
              </div>
              January – May, 2015
            </div>
            <div className="chunk">
              <div className="bold">National Institute for Trial Advocacy</div>{" "}
              Deposition Skills, December 5-7, 2013
            </div>
            <div className="chunk">
              <div className="bold">Colorado District Attorneys’ Council</div>
              Trial Techniques – March 24-28, 2008
            </div>
            <div className="chunk">
              <div className="bold">National Institute for Trial Advocacy</div>{" "}
              National Session, July 7-21, 2007
            </div>
            <div className="chunk">
              <div className="bold">
                Marine Corps Combat Development Command
              </div>{" "}
              Basic Officers’ Course, Quantico, VA
            </div>
          </div>
        </div>

        <div className="honors box">
          <h1 className="title">Honors</h1>
          <div className="body">
            <div className="bold chunk">
              Mr. McKinstry has twice been selected by the Denver Judicial
              Nominating Commission to interview with the Mayor of Denver for a
              Denver County Court Judgeship.
            </div>
            <div className="bold chunk">
              Mr. McKinstry received the Navy and Marine Corps Commendation
              Medal as a USMC Captain.
            </div>
          </div>
        </div>

        <div className="education box">
          <h1 className="title">Education</h1>
          <div className="body">
            <div className="chunk">
              <div className="bold">J.D. </div> 2002, Sandra Day O’Connor
              College of Law, Arizona State University
            </div>
            <div className="chunk">
              <div className="bold"> M.B.A. </div> 2002, W.P. Carey School of
              Business, Arizona University State
            </div>
            <div className="chunk">
              <div className="bold"> B.A. </div> 1993, International Affairs,
              University of Colorado
            </div>
          </div>
        </div>

        <div className="legal box">
          <h1 className="title">Legal Experience</h1>
          <div className="body">
            <div className="chunk">
              <div className="bold">
                Denver City Attorney’s Office 2009-2019{" "}
              </div>{" "}
              Assistant City Attorney assigned to prosecution. Handled thousands
              of criminal cases, general municipal violations, and juvenile
              offenses.
            </div>
            <div className="chunk">
              <div className="bold">
                18th Judicial District – Office of the District Attorney
                2007-2009{" "}
              </div>
              Deputy District Attorney. Prosecuted DUIs, state felonies and
              misdemeanors, as well as juvenile offenses.
            </div>
            <div className="chunk">
              <div className="bold">
                Criminal Defense Firm, Denver Metro Area. 2006-2007
              </div>{" "}
              Associate Attorney in a boutique criminal defense firm
              specializing in DUI, DUI- Drugs, DUR, and related violations.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttorneyProfile
