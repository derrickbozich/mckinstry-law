import React from "react"
import Button from "./button"

function Capabilities(){
  return(
    <div>
      <div className="capabilities-1">
        <h1>
          We are a law firm that brings excellence to the forefront.
        </h1>
        <p>
          We will work with you step by step to ensure that your case gets the attention it deserves. Bringing over 20 years of experience to the table to defend you and your rights. There is no case too big or too small for us.
        </p>
        <Button text='Meet the Team' />
      </div>
      <div className="capabilities-2">
        <div className="venn-diagram">

        </div>
        <div className="content">
          <p className="header">
            Strategy Led Legal Counsel for Clients
          </p>
          <p className="body">
            We will work with you step by step to ensure that your case gets the attention it deserves. Bringing over 20 years of experience to the table to defend you and your rights. There is no case too big or too small for us.
          </p>
        </div>

        <Button text='Meet the Team' />
      </div>
    </div>

  )

}

export default Capabilities
