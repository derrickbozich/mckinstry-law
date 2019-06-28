import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Capabilities() {
  const data = useStaticQuery(graphql`
    query CapabilitiesQuery {
      site {
        siteMetadata {
          phoneNumber
          telPhoneNumber
          email
        }
      }
    }
  `)

  const phoneNumber = data.site.siteMetadata.phoneNumber
  const telPhoneNumber = data.site.siteMetadata.telPhoneNumber
  const email = data.site.siteMetadata.email

  return (
    <div className="capabilities">
      <h2>Schedule a free consultation.</h2>
      <a href={`tel:${telPhoneNumber}`}><p>{phoneNumber}</p></a>

      <a target="_blank" rel="noopener noreferrer" href={`mailto:${email}`}>
        <p>{email}</p>
      </a>
    </div>
  )
}

export default Capabilities
