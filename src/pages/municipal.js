import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import { useStaticQuery, graphql, Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query MunicipalQuery {
      prismicDui {
        data {
          body {
            html
          }
        }
      }
    }
  `)


  const body = data.prismicDui.data.body.text

  return (
    <Layout headline="Municipal Ordinance and General Violations" page="municipal">
      <Capabilities />
      <div className="single-page single-page-content municipal">
        <h1 className="header">Municipal Ordinance and General Violations</h1>

        <div className="body">{body}</div>
        <Link to="/#contact">
          {" "}
          <div className="content-footer">Contact McKinstry</div>
        </Link>
      </div>
      <Contact />
    </Layout>
  )
}
