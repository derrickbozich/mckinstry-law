import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import CountyContent from "../components/countyContent"
import Contact from "../components/contact"
// import { Link } from "gatsby"

export default () => {
  return (
    <Layout
      headline="Defense Lawyer in Cherry Creek"
      page="cherry-creek"
      title="Cherry Creek Criminal Lawyers | The McKinstry Law Firm, LLC"
      description="remove"
      subPage={true}
    >
      <Capabilities />
      <CountyContent />
      <Contact />
    </Layout>
  )
}
