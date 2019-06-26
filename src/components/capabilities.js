import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Capabilities() {

  const data = useStaticQuery(graphql`
    query CapabilitiesQuery {
      site {
        siteMetadata {
          phoneNumber
          email
        }
      }
    }
  `)

  const phoneNumber = data.site.siteMetadata.phoneNumber
  const email = data.site.siteMetadata.email

  return (
    <div className="capabilities">

        <h1>Schedule a free consultation.</h1>
        <p>
          {phoneNumber}
        </p>
        <p>
          {email}
        </p>




    </div>
  )
}

export default Capabilities
