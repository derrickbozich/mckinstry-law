import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout headline="State Felony and Misdemeanor" page="felony">
      <Capabilities />
      <div className="single-page single-page-content felony">
        <h1 className="header">State Felony and Misdemeanor</h1>

        <div className="body">
          <p>
            If you are facing misdemeanor or felony charges in the state of
            Colorado, then you already know how frightening, disruptive, and
            disorienting the experience can be, but there is no time for
            defeatism, and you must take measures to defend your reputation and
            your liberty. You should retain a criminal defense attorney who will
            work with you to develop the case, collect all necessary discovery,
            and employ investigators when necessary to ensure that you have all
            the information you are entitled to, including potentially
            exculpatory evidence. Your attorney may have to compel the
            government to hand over evidence that is helpful to you. In
            representing you in your defense, your attorney must do everything
            possible to protect your liberty.{" "}
          </p>
          <p>
            While the firm stands ready to defend your rights and liberty at
            trial, The McKinstry Law Firm understands that some cases should not
            go to trial. Mr. McKinstry’s experience as a criminal defense
            attorney and former prosecutor gives him an edge in his negotiations
            with the prosecution. His many years of experience in the Courts
            increases the likelihood of reasonable negotiated resolutions of
            cases with the least possible punishment to his clients.
          </p>
          <p>
            As a criminal defense attorney in state Courts, Mr. McKinstry’s
            priority is to ensure that your constitutional rights are protected
            and the burdens you face are minimized. The first line of defense
            deployed by a criminal defense attorney in many criminal cases is
            the filing of motions to suppress evidence. If the Police or
            prosecuting attorney violated your rights in any way while
            collecting evidence, Mr. McKinstry will fight to suppress that
            evidence and, when successful, this can lead to dismissal of the
            criminal charges. The government must follow the rules, no matter
            what the charge. This is the foundation of ordered liberty.
          </p>
          <p>
            Mr. McKinstry has litigated dozens of state criminal cases in front
            of Colorado juries, ranging from attempted murder/first degree
            assault to theft and trespass.
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
