import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import { useStaticQuery, graphql, Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query FelonyQuery {
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
    <Layout headline="State Felony and Misdemeanor" page='felony'>
      <Capabilities />
      <div className="single-page single-page-content felony">
        <h1 className="header">State Felony and Misdemeanor</h1>

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
