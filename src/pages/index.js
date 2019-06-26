import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import PracticeAreas from "../components/practiceAreas"
import About from "../components/about"
// import CallBar from "../components/CallBar"
// import BrandBar from "../components/BrandBar"
import Contact from "../components/contact"
import AttorneyProfile from "../components/attorneyProfile"
// import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
// import Placeholder from "../components/placeholder"

// <Container>
//   <Placeholder />
// </Container>

// <About />
//
// <PracticeAreas />
//
// <Contact />



export default () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
          phoneNumber
          email
        }
      }
    }
  `)
  return (
    <Layout
      metaTitle="The McKinstry Law Firm | Denver DUI and Criminal Defense Attorney"
      metaBody="Patrick McKinstry is one of Denver's leading DUI and Criminal Defense Attorneys. Call today for a free consultation and discover how The McKinstry Law Firm can help you."
      headline={data.site.siteMetadata.title}
      tagline='Your Best Defense'
      page='home'
    >
      <Capabilities />
      <About />
      <PracticeAreas />
        <Capabilities />

      <AttorneyProfile />
        <Contact />
    </Layout>

  )
}
