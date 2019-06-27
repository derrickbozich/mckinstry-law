import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import { useStaticQuery, graphql, Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query JuvenileQuery {
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
    <Layout headline="Juvenile Offenses" page="juvenile">
      <Capabilities />
      <div className="single-page single-page-content juvenile">
        <h1 className="header">Juvenile Offenses</h1>

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
