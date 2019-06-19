import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function CallBar() {
  const data = useStaticQuery(graphql`
    query CallBarQuery {
      site {
        siteMetadata {
          phoneNumber
        }
      }
    }
  `)

  const phoneNumber = data.site.siteMetadata.phoneNumber
  return (
    <div className="call-bar">
      <div className="question">Have a case you would like to discuss?</div>
      <div className="action-call">Call Patrick for a free consultaion</div>
      <div className="phone-number">{phoneNumber}</div>
    </div>
  )
}

export default CallBar
