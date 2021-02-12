import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import PracticeAreas from "../components/practiceAreas"
import About from "../components/about"
import Contact from "../components/contact"
import AttorneyProfile from "../components/attorneyProfile"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout
      headline={data.site.siteMetadata.title}
      tagline="Criminal Defense in Colorado"
      page="home"
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
