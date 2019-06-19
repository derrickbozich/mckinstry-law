import React from "react"

function HeroFooter({ title, tag }) {
  return (
    <div className="hero-footer">
      <div className="container">
        <h1> {title}</h1>
        <p>{tag}</p>
      </div>
    </div>
  )
}

export default HeroFooter
