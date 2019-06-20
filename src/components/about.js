import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import ScrollableAnchor from "react-scrollable-anchor"


function About() {
  return (
    <ScrollableAnchor>
      <div className="about" id="about">
        <div className="narrow-container">
          <h1 className="header">About The Firm</h1>
          <p className="subheader">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          </p>

          <div className="content">
            <StaticQuery
              query={graphql`
                query {
                  imageOne: file(relativePath: { eq: "about.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={data => (
                <Img
                  fluid={data.imageOne.childImageSharp.fluid}
                  className="about-image"
                />
              )}
            />
            <p className="body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              tenetur assumenda officia provident explicabo porro, ipsa harum
              molestias. Ab eligendi adipisci autem eveniet delectus excepturi
              animi at aut consectetur aliquam recusandae veritatis accusantium,
              velit odit, necessitatibus porro libero reprehenderit nemo
              possimus magnam quia et explicabo quaerat id! Harum, molestias.
              Consequatur nobis id repellat aspernatur mollitia illo adipisci
              vitae, distinctio asperiores? Nemo officiis voluptate voluptas
              quaerat reprehenderit, perferendis doloremque quidem voluptatem
              explicabo? Inventore nesciunt obcaecati accusantium beatae,
              necessitatibus numquam ex illo, temporibus, aspernatur eligendi
              aperiam ab dolore! Excepturi, voluptate eos iusto possimus
              reiciendis quae veniam nisi libero velit labore doloribus nam!
            </p>
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default About
