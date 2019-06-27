import React from "react"
import Layout from "../components/layout"
import Capabilities from "../components/capabilities"
import Contact from "../components/contact"
import { Link } from "gatsby"

export default () => {


  return (
    <Layout headline="Municipal Ordinance and General Violations" page="municipal">
      <Capabilities />
      <div className="single-page single-page-content municipal">
        <h1 className="header">Municipal Ordinance and General Violations</h1>

        <div className="body">filler</div>
        <Link to="/#contact">
          {" "}
          <div className="content-footer">Contact McKinstry</div>
        </Link>
      </div>
      <Contact />
    </Layout>
  )
}
