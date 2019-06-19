import React from "react"
import Nav from "./nav"
import Hero from "./hero"
import Head from "./head"

export default ({ children }) => (
  <div>
    <Head />
    <Hero>
      <Nav />
    </Hero>
  </div>
)
