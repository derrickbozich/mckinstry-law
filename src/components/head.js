import React from "react"
import Helmet from "react-helmet"

function Head({title, body}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>
        {title}
      </title>
      <meta
        name="title"
        content={title}
      />
      <meta
        name="description"
        content={body}
      />



      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.mckinstrylawfirm.com/" />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={body}
      />
      <meta property="og:image" content="" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.mckinstrylawfirm.com/"
      />
      <meta
        property="twitter:title"
        content={title}
      />
      <meta
        property="twitter:description"
        content={body}
      />
      <meta property="twitter:image" content="" />
    </Helmet>
  )
}

export default Head
