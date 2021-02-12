// import { Link } from "gatsby"
import React from "react"
import { Nav, NavDropdown } from "react-bootstrap"

const Links = () => {
  const data = [
    { title: "About", link: "/#about", dropdownItems: [] },
    {
      title: "Practice Areas",
      link: "/#practice-areas-id",
      dropdownItems: [
        {
          title: "DUI",
          link: "/denver-dui-lawyer",
        },
        {
          title: "State Felony and Misdemeanor",
          link: "/state-felony-and-misdemeanor",
        },
        {
          title: "Juvenile Offenses",
          link: "/juvenile-offenses",
        },
        {
          title: "Municipal Ordinance and General Violations",
          link: "/municipal",
        },
        {
          title: "Domestic Violence",
          link: "/domestic-violence",
        },
      ],
    },
    {
      title: "Locations",
      link: "/#locations",
      dropdownItems: [
        {
          title: "Cherry Creek",
          link: "/cherry-creek-criminal-defense-attorney",
        },
      ],
    },
    {
      title: "Attorney Profile",
      link: "/#attorney-profile",
      dropdownItems: [],
    },
    { title: "Contact", link: "/#contact", dropdownItems: [] },
  ]

  const links = data.map((item, index) => {
    let link = null
    if (item.dropdownItems.length) {
      const items = item.dropdownItems.map((dditem, idx) => {
        return <NavDropdown.Item href={dditem.link}>{dditem.title}</NavDropdown.Item>
      })
      link = (
        <NavDropdown title={item.title} id="collasible-nav-dropdown">
          {items}
        </NavDropdown>
      )
    } else {
      link = (
        <Nav.Link to={item.link} key={index}>
          {item.title}
        </Nav.Link>
      )
    }
    return link
  })
  return links
}

export default Links
