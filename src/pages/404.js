import React from "react"
import Layout from "../components/layout"

import { useStaticQuery, graphql } from "gatsby"
// import Placeholder from "../components/placeholder"


export default () => {
  const data = useStaticQuery(graphql`
    query NotFoundQuery {
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
      tagline='404 Page Not Found'
      page='404'
    >


    </Layout>

  )
}
