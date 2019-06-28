import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import FooterNav from "./footerNav"

function Footer() {
  const year = new Date().getFullYear()
  const data = useStaticQuery(graphql`
    query FooterNavItemsQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  //
  // <div className="narrow-container footer-wrap">
  //   <div className="footer-top">
  //     <Link to="/">
  //       <h2 className="brand">
  //         The McKinstry <br /> Law Firm
  //       </h2>
  //     </Link>
  //     <nav>
  //       <DesktopNav footer={true}>{/*   <Link to="/">Home</Link> */}</DesktopNav>
  //     </nav>
  //   </div>
  //   <div className="footer-middle">
  //     <div>
  //       <address>
  //         44 Cook St., Suite 100
  //         <br />
  //         Denver, CO 80206
  //       </address>
  //       {/* <p className="phone-number-left">{phoneNumber}</p>*/}
  //       <p className="desktop-email email">{email}</p>
  //     </div>
  //     {/*
  //         <div className="call-us-now-box">
  //           <div className="phone-number">{phoneNumber}</div>
  //           <div className="call-us-now">Call Now</div>
  //         </div>
  //
  //         */}
  //
  //     <div className="call-now-box">
  //       <div className="call-now">Call Now.</div>
  //       <div className="phone-number">{phoneNumber}</div>
  //     </div>
  //   </div>
  //   <p className="mobile-email">{email}</p>
  //   <div className="footer-bottom">
  //     <p>
  //       ©{year} {title}. All Rights Reserved
  //     </p>
  //   </div>
  // </div>

  // <div className="sub-footer">
  //   <div className="content">
  //     The information on this website is for general information purposes
  //     only. Nothing on this site should be taken as legal advice for any
  //     individual case or situation. This information is not intended to
  //     create, and receipt or viewing does not constitute, an attorney-client
  //     relationship.
  //   </div>
  // </div>

  const title = data.site.siteMetadata.title
  // const email = data.site.siteMetadata.email
  // const phoneNumber = data.site.siteMetadata.phoneNumber

  return (
    <div>
      <footer className="footer">
        <div className="narrow-container">
          <nav>
            <FooterNav footer={true} />
          </nav>
          <Link to="/">
            <h2 className="title">{title}</h2>
          </Link>

          <h2 className="tagline">Criminal Defense in Colorado</h2>
          <p className="copyright">
            ©{year} {title}. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
