import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import CountyContent from "../components/countyContent"
import Contact from "../components/contact"

export default () => {
  return (
    <Layout
      headline="Defense Lawyer in Arapahoe County, CO"
      page="cherry-creek"
      title="Arapahoe County Criminal Lawyers | The McKinstry Law Firm, LLC"
      description="remove"
      subPage={true}
    >
      <Capabilities />
      <CountyContent location='Arapahoe County' />

      <Contact />
    </Layout>
  )
}
