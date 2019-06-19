import React from "react"
import { Link } from "gatsby"

export default ({handleClick}) => {
  return (
    <ul className="practice-areas-dropdown">
      <li>
        <Link onClick={handleClick} to="/dui">
          DUI
        </Link>
      </li>
      <li>
        <Link
          onClick={handleClick}
          to="/state-felony-and-misdemeanor"
        >
          State Felony and Misdemeanor
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to="/juvenile-offenses">
          Juvenile Offenses
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to="/municipal">
          Municipal Ordinance and General Violations
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to="/domestic-violence">
          Domestic Violence
        </Link>
      </li>
    </ul>
  )
}
