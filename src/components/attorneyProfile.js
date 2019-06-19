import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function AttorneyProfile() {
  const data = useStaticQuery(graphql`
    query AttorneyProfileQuery {
      imageOne: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="attorney-profile narrow-container">
      <h1 className="header"> Attorney Profile </h1>
      <div className="wrap">
        <Img fluid={data.imageOne.childImageSharp.fluid} className="image" />
        <div className="about box">
          <h1 className="title">About Mr. McKinstry</h1>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            tenetur assumenda officia provident explicabo porro, ipsa harum
            molestias. Ab eligendi adipisci autem eveniet delectus excepturi
            animi at aut consectetur aliquam recusandae veritatis accusantium,
            velit odit, necessitatibus porro libero reprehenderit nemo possimus
            magnam quia et explicabo quaerat id! Harum, molestias. Consequatur
            nobis id repellat aspernatur mollitia illo adipisci vitae,
            distinctio asperiores? Nemo officiis voluptate voluptas quaerat
            reprehenderit, perferendis doloremque quidem voluptatem explicabo?
            Inventore nesciunt obcaecati accusantium beatae, necessitatibus
            numquam ex illo, temporibus, aspernatur eligendi aperiam ab dolore!
            Excepturi, voluptate eos iusto possimus reiciendis quae veniam nisi
            libero velit labore doloribus nam!
          </div>
        </div>
        <div className="training box">
          <h1 className="title">Training</h1>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            tenetur assumenda officia provident explicabo porro, ipsa harum
            molestias. Ab eligendi adipisci autem eveniet delectus excepturi
            animi at aut consectetur aliquam recusandae veritatis accusantium,
            velit odit, necessitatibus porro libero reprehenderit nemo possimus
            magnam quia et explicabo quaerat id! Harum, molestias. Consequatur
            nobis id repellat aspernatur mollitia illo adipisci vitae,
            distinctio asperiores? Nemo officiis voluptate voluptas quaerat
            reprehenderit, perferendis doloremque quidem voluptatem explicabo?
            Inventore nesciunt obcaecati accusantium beatae, necessitatibus
            numquam ex illo, temporibus, aspernatur eligendi aperiam ab dolore!
            Excepturi, voluptate eos iusto possimus reiciendis quae veniam nisi
            libero velit labore doloribus nam!
          </div>
        </div>

        <div className="honors box">
          <h1 className="title">Honors</h1>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            tenetur assumenda officia provident explicabo porro, ipsa harum
            molestias. Ab eligendi adipisci autem eveniet delectus excepturi
            animi at aut consectetur aliquam recusandae veritatis accusantium,
            velit odit, necessitatibus porro libero reprehenderit nemo possimus
            magnam quia et explicabo quaerat id! Harum, molestias. Consequatur
            nobis id repellat aspernatur mollitia illo adipisci vitae,
            distinctio asperiores? Nemo officiis voluptate voluptas quaerat
            reprehenderit, perferendis doloremque quidem voluptatem explicabo?
            Inventore nesciunt obcaecati accusantium beatae, necessitatibus
            numquam ex illo, temporibus, aspernatur eligendi aperiam ab dolore!
            Excepturi, voluptate eos iusto possimus reiciendis quae veniam nisi
            libero velit labore doloribus nam!
          </div>
        </div>

        <div className="education box">
          <h1 className="title">Education</h1>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            tenetur assumenda officia provident explicabo porro, ipsa harum
            molestias. Ab eligendi adipisci autem eveniet delectus excepturi
            animi at aut consectetur aliquam recusandae veritatis accusantium,
            velit odit, necessitatibus porro libero reprehenderit nemo possimus
            magnam quia et explicabo quaerat id! Harum, molestias. Consequatur
            nobis id repellat aspernatur mollitia illo adipisci vitae,
            distinctio asperiores? Nemo officiis voluptate voluptas quaerat
            reprehenderit, perferendis doloremque quidem voluptatem explicabo?
            Inventore nesciunt obcaecati accusantium beatae, necessitatibus
            numquam ex illo, temporibus, aspernatur eligendi aperiam ab dolore!
            Excepturi, voluptate eos iusto possimus reiciendis quae veniam nisi
            libero velit labore doloribus nam!
          </div>
        </div>

        <div className="legal box">
          <h1 className="title">Legal Experience</h1>
          <div className="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            tenetur assumenda officia provident explicabo porro, ipsa harum
            molestias. Ab eligendi adipisci autem eveniet delectus excepturi
            animi at aut consectetur aliquam recusandae veritatis accusantium,
            velit odit, necessitatibus porro libero reprehenderit nemo possimus
            magnam quia et explicabo quaerat id! Harum, molestias. Consequatur
            nobis id repellat aspernatur mollitia illo adipisci vitae,
            distinctio asperiores? Nemo officiis voluptate voluptas quaerat
            reprehenderit, perferendis doloremque quidem voluptatem explicabo?
            Inventore nesciunt obcaecati accusantium beatae, necessitatibus
            numquam ex illo, temporibus, aspernatur eligendi aperiam ab dolore!
            Excepturi, voluptate eos iusto possimus reiciendis quae veniam nisi
            libero velit labore doloribus nam!
          </div>
        </div>


      </div>
    </div>
  )
}

export default AttorneyProfile
