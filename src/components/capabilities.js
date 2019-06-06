import React from "react"
import Button from "./button"
import ContentFooter from "./contentFooter"

function Capabilities() {
  return (
    <div className="capabilities">
      <div className="capabilities-1">
        <h1>We are a law firm that brings excellence to the forefront.</h1>
        <p>
          We will work with you step by step to ensure that your case gets the
          attention it deserves. Bringing over 20 years of experience to the
          table to defend you and your rights. There is no case too big or too
          small for us.
        </p>
        <Button text="Meet the Team" />
      </div>
      <div className="capabilities-2">
        <div className="venn-diagram" />
        <div className="content">
          <p className="header">Strategy Led Legal Counsel for Clients</p>
          <p className="body">
            We will work with you step by step to ensure that your case gets the
            attention it deserves. Bringing over 20 years of experience to the
            table to defend you and your rights. There is no case too big or too
            small for us.
          </p>
          <ContentFooter text="browse our services" />
        </div>
      </div>
      <div className="capabilities-3">
        <div className="header">
          <h1>We Get Results.</h1>
        </div>
        <div className="body">
          <p>
            We will work with you step by step to ensure that your case gets the
            attention it deserves. Bringing over 20 years of experience to the
            table to defend you and your rights. There is no case too big or too
            small for us.
          </p>
        </div>

      </div>
      <div className="call-us-now">
        <div className="header">Call us now for your free consultation</div>
        <div className="phone-number">
          303-304-9413
        </div>

      </div>

    </div>

  )
}

export default Capabilities
