import React from "react"
import Helmet from "react-helmet"

function Head() {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>
        The McKinstry Law Firm | Denver DUI and Criminal Defense Attorney
      </title>
      <meta
        name="title"
        content="The McKinstry Law Firm | Denver DUI and Criminal Defense Attorney"
      />
      <meta
        name="description"
        content="Patrick McKinstry is one of Denver's leading DUI and Criminal Defense Attorneys. Call today for a free consultation and discover how McKinstry Law Firm can help you."
      />



      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.mckinstrylawfirm.com/" />
      <meta
        property="og:title"
        content="The McKinstry Law Firm | Denver DUI and Criminal Defense Attorney"
      />
      <meta
        property="og:description"
        content="Patrick McKinstry is one of Denver's leading DUI and Criminal Defense Attorneys. Call today for a free consultation and discover how McKinstry Law Firm can help you."
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
        content="The McKinstry Law Firm | Denver DUI and Criminal Defense Attorney"
      />
      <meta
        property="twitter:description"
        content="Patrick McKinstry is one of Denver's leading DUI and Criminal Defense Attorneys. Call today for a free consultation and discover how McKinstry Law Firm can help you."
      />
      <meta property="twitter:image" content="" />
    </Helmet>
  )
}

export default Head
