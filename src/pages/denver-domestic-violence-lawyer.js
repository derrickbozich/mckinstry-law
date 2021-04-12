import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import { Link } from "gatsby"


export default () => {
  return (
    <Layout
      headline="Domestic Violence"
      page="domestic"
      subPage={true}
      description="remove"
      title="Domestic Violence Lawyer Denver | Domestic Assault Attorneys"
    >
      <Capabilities />
      <div className="single-page single-page-content domestic">
        <h2 className="header">Domestic Violence</h2>

        <div className="body">
          <p>
            Domestic violence is a legal term, and a sentence enhancer, that
            attaches to a criminal offense allegedly committed by one person
            against another person who share an intimate relationship. The list
            of offenses that can form the basis for a domestic violence charge
            is lengthy. It ranges from serious felonies, such as second degree
            assault, to misdemeanor allegations of harassment. Domestic violence
            may also be charged in Municipal Court, and the penalties may
            include fines and lengthy confinement. The underlying offense in
            most domestic violence cases is an act committed as a means of
            coercion, control, punishment, intimidation, or revenge against an
            intimate partner. Examples include threats, intimidation, criminal
            mischief, assault, harassment, trespass, and even charges of
            disturbing the peace.
          </p>
          <p>
            If you are facing domestic violence charges, whether in District,
            County, or Municipal Court, you risk serious consequences to your
            reputation, your career, and your liberty. You need an attorney with
            extensive experience in handling these cases, and who can guide you
            through the judicial process while protecting your rights and
            interests. If you and your lawyer determine that it’s in your best
            interest to go to trial, you need a trial advocate who will hold the
            government to its burden of proof and do everything possible to
            expose and exploit the weaknesses in the state’s case.
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
