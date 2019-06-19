import React from "react"
import Head from "./head"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div>
    <Head />
    <Header />
    {children}
    <Footer />
  </div>
)
