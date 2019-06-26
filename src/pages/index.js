import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import PracticeAreas from "../components/practiceAreas"
import About from "../components/about"
// import CallBar from "../components/CallBar"
// import BrandBar from "../components/BrandBar"
import Contact from "../components/contact"
import AttorneyProfile from "../components/attorneyProfile"
// import Placeholder from "../components/placeholder"

// <Container>
//   <Placeholder />
// </Container>

// <About />
//
// <PracticeAreas />
//
// <Contact />

export default () => (
  <Layout
    title="The McKinstry Law Firm | Denver DUI and Criminal Defense Attorney"
    body="Patrick McKinstry is one of Denver's leading DUI and Criminal Defense Attorneys. Call today for a free consultation and discover how McKinstry Law Firm can help you."
  >
    <Capabilities />
    <About />
    <PracticeAreas />
    <Contact />
    <AttorneyProfile />
  </Layout>
)
