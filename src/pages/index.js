import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import PracticeAreas from "../components/practiceAreas"
import About from "../components/about"
import Contact from "../components/contact"
import AttorneyProfile from "../components/attorneyProfile"
import { useStaticQuery, graphql } from "gatsby"
// import Placeholder from "../components/placeholder"




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
