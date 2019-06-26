import React from "react"
import { Link } from "gatsby"


export default ({handleClick}) => {
  return (
    <ul className="practice-areas-dropdown">
      <li>
        <Link onClick={handleClick} to="/dui#dui">
          DUI
        </Link>
      </li>
      <li>
        <Link
          onClick={handleClick}
          to="/state-felony-and-misdemeanor#felony"
        >
          State Felony and Misdemeanor
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to="/juvenile-offenses#juvenile">
          Juvenile Offenses
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to="/municipal#municipal">
          Municipal Ordinance and General Violations
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to="/domestic-violence#domestic">
          Domestic Violence
        </Link>
      </li>
    </ul>
  )
}
