import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Contact() {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          phoneNumber
          email
        }
      }
    }
  `)

  const phoneNumber = data.site.siteMetadata.phoneNumber;
  const email = data.site.siteMetadata.email;
  return (
    <div className="contact narrow-container">
      <h1 className="header">Contact</h1>
      <p className="info">
        To schedule a free consultation please call or email Mr. McKinstry at:
      </p>
      <p className="email"> {email}</p>

      <p className="phone"> {phoneNumber}</p>
    </div>
  )
}

export default Contact
