import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout headline="Juvenile Offenses: Felony, Misdemeanor, and Municipal" page="juvenile">
      <Capabilities />
      <div className="single-page single-page-content juvenile">
        <h1 className="header">Juvenile Offenses: Felony, Misdemeanor, and Municipal</h1>

        <div className="body">
          <p>
            In the state of Colorado, juveniles can be charged with many of the
            same crimes that adults may face, but the justice system is designed
            to treat them differently. In juvenile offenses, there is an
            emphasis on rehabilitation, but serious charges against a minor can
            still lead to serious consequences, including incarceration in a
            state facility.
          </p>
          <p>
            If your son or daughter is facing criminal charges, it’s vital that
            you seek legal assistance from an attorney with experience handling
            juvenile offenses. Juveniles are entitled to the same presumption of
            innocence and due process as adults, and the government is held to
            the same high standards of proof in prosecuting juvenile defendants.{" "}
          </p>
          <p>
            The scientific, medical, and behavioral health communities
            understand that the human brain is still developing well into a
            young person’s twenties, and all adolescents are susceptible to
            impulsive and reckless behavior. It’s crucial that a child’s future
            not be derailed by a lapse in judgment, even a serious one, and a
            criminal defense attorney who has the necessary experience and
            proficiency can, in many cases, work with the prosecution to achieve
            a satisfactory disposition. But if the case goes to trial, you’ll
            want an attorney on your side who has litigated juvenile delinquency
            cases. Mr. McKinstry has litigated juvenile felonies and
            misdemeanors in state court, and knows how to expose the weaknesses
            that exist in every case, offering your best chance at an acquittal.
          </p>
        </div>
        <Link to="/#contact">
          {" "}
          <div className="content-footer">Contact Mr. McKinstry</div>
        </Link>
      </div>
      <Contact />
    </Layout>
  )
}
