import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Capabilities() {

  const data = useStaticQuery(graphql`
    query CapabilitiesQuery {
      site {
        siteMetadata {
          phoneNumber
        }
      }
    }
  `)

  const phoneNumber = data.site.siteMetadata.phoneNumber

  return (
    <div className="capabilities">
    
        <h1>Have a case you would like to discuss?</h1>
        <p>
          Call now for a free consultation
        </p>
        <p>
          {phoneNumber}
        </p>



    </div>
  )
}

export default Capabilities
