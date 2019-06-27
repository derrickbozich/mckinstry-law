import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import { useStaticQuery, graphql, Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query DuiQuery {
      prismicDui {
        data {
          body {
            html
          }
        }
      }
    }
  `)

  const body = data.prismicDui.data.body.html

  return (
    <Layout headline="DUI, DUI-Drug, and Related Violations" page="dui">
      <Capabilities />
      <div className="single-page single-page-content dui">
        <h1 className="header">Driving Under the Influence</h1>

        <div className="body" dangerouslySetInnerHTML={{ __html: body }}></div>
        <Link to="/#contact">
          {" "}
          <div className="content-footer">Contact McKinstry</div>
        </Link>
      </div>
      <Contact />
    </Layout>
  )
}
