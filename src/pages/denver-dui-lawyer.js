import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout
      headline="DUI, DWAI, Drug and Related Violations"
      page="dui"
      title="Denver DUI Defense | The McKinstry Law Firm | DWAI Attorney"
      description='remove'
      subPage={true}
    >
      <Capabilities />
      <div className="single-page single-page-content dui">
        <h2 className="header">Driving Under the Influence</h2>

        <div className="body">
          <p>
            While DUI is one of the most commonly charged traffic offenses in
            Colorado, it is also a serious criminal offense that has the
            potential to impact an individual’s financial, professional, and
            personal life. Due to the serious nature of the potential
            consequences of a DUI conviction, it is essential to have a
            highly-experienced attorney who not only knows Colorado DUI law, but
            who also knows the court system, the science of DUI testing, and the
            time-sensitive nature of the procedures and filings in DUI matters.
            If you choose to go to trial, you need an attorney who possesses the
            confidence, experience, and technical proficiency necessary to
            vigorously and effectively defend your rights and interests in front
            of a jury.{" "}
          </p>
          <p>
            If convicted of a DUI, the consequences may include jail time,
            substantial fines, a suspended driver’s license, as well as a
            damaged personal and professional reputation.  With so much at
            stake, a highly-qualified attorney is essential.
          </p>
          <p>
            Whether the DUI is a first time or repeat offense, every charge has
            significant impacts and risks.  The McKinstry Law Firm can guide you
            through the many important considerations in each matter. Mounting
            the proper defense in a timely manner is essential to a satisfactory
            outcome in your case.
          </p>
          <p>
            If you are facing DUI-Drug charges, your lawyer must understand the
            science and the practical realities of roadside drug recognition, as
            well as the complexities of blood testing, and its often dubious and
            misleading results. Your attorney must be able to locate and isolate
            the flaws in the state’s case, and to make those weaknesses clear to
            the factfinders.
          </p>
          <p>
            As a Deputy DA and criminal defense attorney, Mr. McKinstry has
            handled thousands of DUI, DUR (driving Under Revocation), and
            related vehicular offenses. He has litigated dozens of DUI cases in
            front of Colorado juries.{" "}
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
