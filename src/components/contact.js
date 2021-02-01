import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import GoogleMapReact from "google-map-react"

// <GoogleMapReact
//   bootstrapURLKeys={{ key: key }}
//   defaultCenter={{
//     lat: location.center.lat,
//     lng: location.center.lng,
//   }}
//   defaultZoom={location.zoom}
// >
//   <Marker
//     lat={location.center.lat}
//     lng={location.center.lng}
//     className="marker"
//
//   />
// </GoogleMapReact>

function Contact() {
  // const location = {
  //   center: {
  //     lat: 39.716927,
  //     lng: -104.947369,
  //   },
  //   zoom: 13,
  // }
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          phoneNumber
          telPhoneNumber
          email
          title
        }
      }
      imageOne: file(relativePath: { eq: "map.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // const Marker = ({ text }) => <div className="marker">{text}</div>

  const phoneNumber = data.site.siteMetadata.phoneNumber
  const telPhoneNumber = data.site.siteMetadata.telPhoneNumber
  const email = data.site.siteMetadata.email
  const title = data.site.siteMetadata.title

  return (
    <div className="contact" id="contact">
      <div className="narrow-container">
        <div className="wrap">
          <div className="text">
            <h3 className="header">Contact</h3>
            <h4 className="title"> {`${title}, LLC`}</h4>
            <address className="bold">
              44 Cook Street, Suite 100 <br />
              Denver, CO 80206 <br />
            </address>
            <a className="bold phone" href={`tel:${telPhoneNumber}`}>
              {phoneNumber}
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${email}`}
              className="bold email"
            >
              {email}
            </a>
            <p className="disclaimer">
              {" "}
              The information on this website is for general information
              purposes only. Nothing on this site should be taken as legal
              advice for any individual case or situation. This information is
              not intended to create, and receipt or viewing does not
              constitute, an attorney-client relationship.
            </p>
          </div>
          <div className="map">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/44+Cook+St,+Denver,+CO+80206/@39.7167326,-104.9490596,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7e9bb741e409:0xdbbe34e6b855e3cc!8m2!3d39.7167326!4d-104.9468709"
            >
              <Img
                fluid={data.imageOne.childImageSharp.fluid}
                className="image"
                role="img"
                aria-label="Car Keys resting on the side of a glass of whiskey, indicating that one might be driving under the influence DUI"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
