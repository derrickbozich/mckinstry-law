import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAward } from "@fortawesome/free-solid-svg-icons"


function WhyUs() {
  return (
    <div className="why-us">
      <h1 className="header">WHY CHOOSE McKINSTRY LAW FIRM?</h1>
      <div className="icon-section">
        <div className="box">
          <FontAwesomeIcon
            className="icon"
            icon={faAward}
            size="4x"
          />
          <p className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo adipisci, esse blanditiis.
          </p>
        </div>

        <div className="box">
          <FontAwesomeIcon
            className="icon"
            icon={faAward}
            size="4x"
          />
          <p className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo adipisci, esse blanditiis.
          </p>
        </div>

        <div className="box">
          <FontAwesomeIcon
            className="icon"
            icon={faAward}
            size="4x"
          />
          <p className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo adipisci, esse blanditiis.
          </p>
        </div>

        <div className="box">
          <FontAwesomeIcon
            className="icon"
            icon={faAward}
            size="4x"
          />
          <p className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo adipisci, esse blanditiis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
