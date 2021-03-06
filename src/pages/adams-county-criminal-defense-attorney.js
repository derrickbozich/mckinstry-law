import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import CountyContent from "../components/countyContent"

import Contact from "../components/contact"
// import { Link } from "gatsby"

export default () => {
  return (
    <Layout
      headline="Defense Lawyer in Adams County, CO"
      page="cherry-creek"
      title="Adams County Criminal Lawyers | The McKinstry Law Firm, LLC"
      description="remove"
      subPage={true}
    >
      <Capabilities />
      <CountyContent location='Adams County' burglary='Felony Burglary charges are on the increase in Thornton, the rest of Adams County, and in Colorado Courts along the Front Range.' />
      <Contact />
    </Layout>
  )
}
