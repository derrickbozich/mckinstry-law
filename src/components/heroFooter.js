import React from "react"

function HeroFooter({ title, tag, id }) {
  return (
    <div className="hero-footer" id={id}>
      <div className="container">
        <h1> {title}</h1>
        <p>{tag}</p>
      </div>
    </div>
  )
}

export default HeroFooter
