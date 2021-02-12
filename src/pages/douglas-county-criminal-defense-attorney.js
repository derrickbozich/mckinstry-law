import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import CountyContent from "../components/countyContent"

// import { Link } from "gatsby"

export default () => {
  return (
    <Layout
      headline="Defense Lawyer in Douglas County, CO"
      page="cherry-creek"
      title="Douglas County Criminal Lawyers | The McKinstry Law Firm, LLC"
      description="remove"
      subPage={true}
    >
      <Capabilities />
      <CountyContent />
      <Contact />
    </Layout>
  )
}
