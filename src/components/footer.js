import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import DesktopNav from "./desktopNav"

function Footer() {
  const year = new Date().getFullYear()
  const data = useStaticQuery(graphql`
    query FooterNavItemsQuery {
      site {
        siteMetadata {
          title
          phoneNumber
          email
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title
  const email = data.site.siteMetadata.email
  const phoneNumber = data.site.siteMetadata.phoneNumber

  return (
    <div>
      <footer className="footer">
        <div className="container footer-wrap">
          <div className="footer-top">
            <Link to="/">
              <h1 className="brand">{title}</h1>
            </Link>
            <nav>
              <DesktopNav>
                <Link to="/">Home</Link>
              </DesktopNav>
            </nav>
          </div>
          <div className="footer-middle">
            <div>
              <address>
                123 Pennsylvania Ave.
                <br />
                Denver, CO 80201
              </address>
              <p className="phone-number-left">{phoneNumber}</p>
              <p className="desktop-email email">{email}</p>
            </div>
            <div className="call-us-now-box">
              <div className="phone-number">{phoneNumber}</div>
              <div className="call-us-now">Call Now</div>
            </div>
          </div>
          <p className="mobile-email">{email}</p>
          <div className="footer-bottom">
            <p>
              ©{year} {title}. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
      <div className="sub-footer">
        The information on this website is for general information purposes
        only. Nothing on this site should be taken as legal advice for any
        individual case or situation. This information is not intended to
        create, and receipt or viewing does not constitute, an attorney-client
        relationship.
      </div>
    </div>
  )
}

export default Footer
