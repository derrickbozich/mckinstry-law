import React from "react"
import Layout from "../components/layout"
import HeroFooter from "../components/heroFooter"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <Layout>
    <HeroFooter title="State Felony and Misdemeanor" tag="tagline" />
    <div className="single-page narrow-container felony">
      <h1 className="header">State Felony and Misdemeanor</h1>
      <div className="wrap">
        <div className="big-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          tenetur assumenda officia provident explicabo porro, ipsa harum
          molestias. Ab eligendi adipisci autem eveniet delectus excepturi animi
          at aut consectetur aliquam recusandae veritatis accusantium, velit
          odit, necessitatibus porro libero reprehenderit nemo possimus magnam
          quia et explicabo quaerat id! Harum, molestias. Consequatur nobis id
          repellat aspernatur mollitia illo adipisci vitae, distinctio
          asperiores? Nemo officiis voluptate voluptas quaerat reprehenderit,
          perferendis doloremque quidem voluptatem explicabo? Inventore nesciunt
          obcaecati accusantium beatae, necessitatibus numquam ex illo,
          temporibus, aspernatur eligendi aperiam ab dolore! Excepturi,
          voluptate eos iusto possimus reiciendis quae veniam nisi libero velit
          labore doloribus nam!
        </div>
        <StaticQuery
          query={graphql`
            query {
              imageOne: file(relativePath: { eq: "felony.jpeg" }) {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => (
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              className="image"
            />
          )}
        />
      </div>
      <div className="small-para">
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
      </div>
    </div>
  </Layout>
)
