import React from "react"

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div>
      <footer className="footer">
        <div className="left">
          <h1>McKinstry Law Firm</h1>
          <address>
            123 Pennsylvania Ave. <br />
            Denver, CO 80201
          </address>

          <p>303-304-9413</p>
          <p>mckinstrylawfirm@gmail.com</p>
          <p>©{year} McKinstry Law Firm. All Rights Reserved</p>
        </div>
        <div className="right">
          <nav>
            <ul>
              <li>Home</li>
              <li>Capabilities</li>
              <li>Practice Areas</li>
              <li>Why Us</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="call-us-now-box">
            <div className="placeholder" />
            <div className="phone-number">303-304-9413</div>
            <div className="call-us-now">Call Us Now</div>
          </div>
        </div>
      </footer>
      <div className="sub-footer" >
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
