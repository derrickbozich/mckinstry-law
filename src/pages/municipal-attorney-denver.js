import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import AboutContent from "../components/aboutContent"
import Contact from "../components/contact"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout
      headline="Denver Municipal Lawyer"
      page="municipal"
      subPage={true}
      title="Denver Municipal Law Attorneys | Lawyers for Muni Cases"
      description="remove"
    >
      <Capabilities />
      <div className="single-page single-page-content municipal">
        <h2 className="header">Municipal Ordinance and General Violations</h2>

        <div className="body">
          <p>
            In the state of Colorado, many cities and towns draft their own
            rules and regulations. Many of these ordinances relate to public
            order and safety, such as assault, theft, and solicitation for
            prostitution, as well as weapons violations and threats. Municipal
            Ordinance crimes can also be charged as ‘domestic violence’
            offenses, with many of the same consequences as state domestic
            violence charges. Furthermore, a guilty plea or conviction at trial
            on a municipal charge can trigger violations of a deferred judgment,
            supervised probation or parole in other cases.
          </p>
          <p>
            Don’t let anyone tell you that it’s not serious because it’s just a
            “muni” case. All of these charges can come with serious fines, and
            in many cases the Assistant City Attorney will be asking for jail
            time. This is especially true of domestic violence cases. If charged
            under a municipal ordinance, you must defend your liberty and your
            reputation as vigorously as you would in state court, and you will
            benefit from the assistance of a criminal defense attorney who knows
            the system and can identify and exploit the weaknesses in the
            municipality’s case. Whether you’re charged with a fire or building
            code violation, or something as serious as assault, you should not
            go it alone.{" "}
          </p>
          <p>
            Mr. McKinstry spent years in the courtroom handling such cases and
            has litigated nearly one hundred municipal cases in front of
            Colorado juries, ranging from sewer-line violations to domestic
            violence, threats, harassment, and assault charges.
          </p>
        </div>
        <AboutContent />
        <Link to="/#contact">
          {" "}
          <div className="content-footer">Contact Mr. McKinstry</div>
        </Link>
      </div>
      <Contact />
    </Layout>
  )
}
