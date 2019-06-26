import React from "react"
import Head from "./head"
import Header from "./header"
import Footer from "./footer"

export default ({ children, title, body }) => (
  <div>
    <Head
      title={title}
      body={body}
    />
    <Header />
    {children}
    <Footer />
  </div>
)
