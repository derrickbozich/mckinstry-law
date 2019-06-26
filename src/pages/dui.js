import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query DuiQuery {
      prismicDui {
        data {
          body {
            text
          }
        }
      }
    }
  `)

  const body = data.prismicDui.data.body.text

  return (
    <Layout headline="DUI, DUI-Drug, and Related Violations" page="dui">
      <Capabilities />
      <div className="single-page single-page-content dui">
        <h1 className="header">Driving Under the Influence</h1>

        <div className="body">{body}</div>
        <div className="content-footer">Contact McKinstry</div>
      </div>
      <Contact />
    </Layout>
  )
}
