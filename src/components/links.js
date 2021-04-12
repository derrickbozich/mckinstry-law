import { Link } from "gatsby"
import React from "react"
import { NavDropdown } from "react-bootstrap"

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
          link: "/denver-felony-defense-lawyer",
        },
        {
          title: "Juvenile Offenses",
          link: "/denver-juvenile-attorney",
        },
        {
          title: "Municipal Ordinance and General Violations",
          link: "/municipal-attorney-denver",
        },
        {
          title: "Domestic Violence",
          link: "/denver-domestic-violence-lawyer",
        },
      ],
    },
    // {
    //   title: "Locations",
    //   link: "/#locations",
    //   dropdownItems: [
    //     {
    //       title: "Adams County",
    //       link: "/adams-county-criminal-defense-attorney",
    //     },
    //     {
    //       title: "Arapahoe County",
    //       link: "/arapahoe-county-criminal-defense-attorney",
    //     },
    //     {
    //       title: "Cherry Creek",
    //       link: "/cherry-creek-criminal-defense-attorney",
    //     },
    //     {
    //       title: "Douglas County",
    //       link: "/douglas-county-criminal-defense-attorney",
    //     },
    //     {
    //       title: "Jefferson County",
    //       link: "/jefferson-county-criminal-defense-attorney",
    //     },
    //   ],
    // },
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
        <Link to={item.link} key={index} className='nav-link'>
          {item.title}
        </Link>
      )
    }
    return link
  })
  return links
}

export default Links
