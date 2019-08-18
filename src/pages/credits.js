/** Dependencies */
import React from "react"

/** Imported Components */
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import Line from "../components/Line/Line"
import TextBody from "../components/TextBody/TextBody"

const Credit = () => {
  return (
    <Layout>
      <Title text="Credits" />
      <Line primary bold />
      <TextBody>
        <p>This website is inspired by awesome works from:</p>
        <ul>
          <li>
            <a href="https://juliette.sh/">Juliette Pretot</a>
          </li>
          <li>
            <a href="https://brittanychiang.com/">Brittany Chiang</a>
          </li>
          <li>
            <a href="https://overreacted.io/">Dan Abramov</a>
          </li>
          <li>
            <a href="https://kelimuttu.co/">Rizki D Kelimutu</a>
          </li>
        </ul>
        <p>
          Greate thanks for <a href="https://dribbble.com/">dribbble</a>, which
          provide unlimited inspirations.
          <br />
          And <a href="https://www.flaticon.com/">FLATICON</a> for pretty icons
          I use here.
        </p>
      </TextBody>
    </Layout>
  )
}

export default Credit
