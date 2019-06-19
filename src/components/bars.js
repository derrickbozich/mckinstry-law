import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default ( {onClick} ) => (
  <FontAwesomeIcon
    className="bars"
    icon={faBars}
    size="lg"
    onClick={onClick}
  />
)
