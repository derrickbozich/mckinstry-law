import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import FooterNav from "./footerNav"
import Img from "gatsby-image"

function Footer() {
  const year = new Date().getFullYear()
  const data = useStaticQuery(graphql`
    query FooterNavItemsQuery {
      site {
        siteMetadata {
          title
        }
      }
      imageOne: file(relativePath: { eq: "rating.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  const title = data.site.siteMetadata.title


  return (
    <div>
      <footer className="footer">
        <div className="narrow-container">
          <nav>
            <FooterNav footer={true} />
          </nav>
          <Link to="/">
            <h2 className="title">{title}</h2>
          </Link>

          <h3 className="tagline">Your Best Defense</h3>

          <p className="copyright">
            ©{year} {title}. All Rights Reserved
          </p>
          <a
            href="https://www.martindale.com/denver/colorado/patrick-c-mckinstry-3723684-a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              className="rating"
              role="img"
              aria-label="Car Keys resting on the side of a glass of whiskey, indicating that one might be driving under the influence DUI"
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
