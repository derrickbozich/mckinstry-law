import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GoogleMapReact from "google-map-react"

function Contact() {
  const location = {
    center: {
      lat: 39.716927,
      lng: -104.947369,
    },
    zoom: 13,
  }
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          phoneNumber
          email
          title
        }
      }
    }
  `)

  const Marker = ({ text }) => <div className='marker'>{text}</div>

  const phoneNumber = data.site.siteMetadata.phoneNumber
  const email = data.site.siteMetadata.email
  const title = data.site.siteMetadata.title
  const key = "AIzaSyB17xhI5X9XSkXDDUIIG_Q-M6J520ctynM"
  return (
    <div className="contact" id="contact">
      <div className="narrow-container">
        <div className="wrap">
          <div className="text">
            <h1 className="header">Contact</h1>
            <h1 className="title"> {title}</h1>
            <address  className="bold">
              44 Cook St., Suite 100 <br />
              Denver, CO 80206 <br />
            </address>
            <p className="bold phone"> {phoneNumber}</p>
            <p className="bold email"> {email}</p>
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
            <GoogleMapReact
              bootstrapURLKeys={{ key: key }}
              defaultCenter={{
                lat: location.center.lat,
                lng: location.center.lng,
              }}
              defaultZoom={location.zoom}
            >
              <Marker
                lat={location.center.lat}
                lng={location.center.lng}
                className="marker"

              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
