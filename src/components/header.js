import React from "react"
// import { Link } from "gatsby"
import Links from "./links"
import Hero from "./hero"
import { Navbar, Nav, Container } from "react-bootstrap"

export default ({ children, headline, tagline, page, subPage }) => {
  return (
    <>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">
            <h3 className="brand">The McKinstry Law Firm, LLC</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="nav-items">
            <Nav>
              <Links />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <Hero
        headline={headline}
        tagline={tagline}
        page={page}
        subPage={subPage}
      ></Hero>
    </>
  )
}
