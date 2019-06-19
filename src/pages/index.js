import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import PracticeAreas from "../components/practiceAreas"
import About from "../components/about"
import CallBar from "../components/CallBar"
import BrandBar from "../components/BrandBar"
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
  <Layout>
    <Capabilities />
    <About />
    <CallBar />
    <PracticeAreas />
    <BrandBar />
    <Contact />
    <AttorneyProfile />


  </Layout>
)
