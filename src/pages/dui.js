import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import { Link } from "gatsby"

export default () => {


  return (
    <Layout headline="DUI, DUI-Drug, and Related Violations" page="dui">
      <Capabilities />
      <div className="single-page single-page-content dui">
        <h1 className="header">Driving Under the Influence</h1>

        <div className="body">
          filler
        </div>
        <Link to="/#contact">
          {" "}
          <div className="content-footer">Contact McKinstry</div>
        </Link>
      </div>
      <Contact />
    </Layout>
  )
}
