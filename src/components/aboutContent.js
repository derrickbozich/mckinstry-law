import React from "react"

function AboutContent({ location = "Adams County" }) {
  return (
    <>
      <h2 className="header">
        About The McKinstry Law Firm, LLC., and its Founder
      </h2>

      <div className="body">
        <p>
          The McKinstry Law Firm is dedicated exclusively to the practice of
          criminal defense law in Colorado, and serves clients on the front
          range and in jurisdictions along the I-70 corridor. The firm is
          experienced in the preparation and litigation of state felony and
          misdemeanor charges, DUI and related vehicular offenses, juvenile
          offenses, domestic violence, municipal ordinance violations, and
          general violations. Mental illness is often a factor when serious
          criminal charges are filed, and The McKinstry Law Firm is experienced
          in the practice of mental health law in Colorado. The McKinstry law
          firm adheres to the highest standards of professionalism, diligence
          and integrity. Call today for a free and confidential consultation.
        </p>
        <p>
          For almost fifteen years Mr. McKinstry has litigated in District,
          County, Juvenile, and Municipal Courts in the {location} area. He has
          first-chaired nearly one hundred and fifty jury trials, and hundreds
          of trials to the Court.
        </p>
        <p>
          Mr. McKinstry is a graduate of the National Institute for Trial
          Advocacy’s National Session, an intensive two-week trial training
          program, as well as the Colorado Bar Association’s Leadership Training
          program.
        </p>
        <p>
          Mr. McKinstry is a Martindale-Hubbell AV Preeminent Rated Attorney for
          2019. His peers have ranked him at the highest level of professional
          excellence for legal knowledge, communication skills, and ethical
          standards.
        </p>
        <p>
          Mr. McKinstry earned his law degree and MBA at Arizona State
          University. Prior to law school, Mr. McKinstry served as an officer in
          the United States Marine Corps. He spent his career in the Marines as
          a logistician and Aide-de-Camp. Mr. McKinstry was honorably discharged
          with the rank of Captain after his time in the Fleet Marine Force
          Atlantic, and was awarded the Navy and Marine Corps Commendation
          Medal.
        </p>
        <p>
          Mr. McKinstry is a fourth-generation Coloradan. His family ranched on
          the Western slope, and raised champion Arabian horses. His grandfather
          trained with the legendary 10th Mountain Division at Camp Hale, and
          fought in Italy’s Apennine Mountains in 1945.
        </p>
      </div>
    </>
  )
}

export default AboutContent
