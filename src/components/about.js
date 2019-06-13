import React from "react"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"

function About() {
  return (
    <div className="about">
      <h1 className="header">Meet The Team</h1>
      <StaticQuery
        query={graphql`
          query {
            imageOne: file(relativePath: { eq: "one.jpeg" }) {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <BackgroundImage fluid={data.imageOne.childImageSharp.fluid} />}
      />
      <p className="body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        tenetur assumenda officia provident explicabo porro, ipsa harum
        molestias. Ab eligendi adipisci autem eveniet delectus excepturi animi
        at aut consectetur aliquam recusandae veritatis accusantium, velit odit,
        necessitatibus porro libero reprehenderit nemo possimus magnam quia et
        explicabo quaerat id! Harum, molestias. Consequatur nobis id repellat
        aspernatur mollitia illo adipisci vitae, distinctio asperiores? Nemo
        officiis voluptate voluptas quaerat reprehenderit, perferendis
        doloremque quidem voluptatem explicabo? Inventore nesciunt obcaecati
        accusantium beatae, necessitatibus numquam ex illo, temporibus,
        aspernatur eligendi aperiam ab dolore! Excepturi, voluptate eos iusto
        possimus reiciendis quae veniam nisi libero velit labore doloribus nam!
      </p>
    </div>
  )
}

export default About
