/** Dependencies */
import React from "react"
import { Link } from "gatsby"

/** Imported Components */
import Layout from "../components/Layout/Layout"
import TextBody from "../components/TextBody/TextBody"
import Heading from "../components/Heading/Heading"

/** Style */
import pageStyles from "./page.module.scss"

const NotFoundPage = () => {
  const seo = {
    title: "Not Found",
  }

  return (
    <Layout seo={seo}>
      <div className={`${pageStyles.intro} ${pageStyles.notFound}`}>
        <Heading text="404" />
        <TextBody>
          <p>
            Oops, the page you are trying to access is not available.
            <br />
            How about we start from the beginning?
          </p>
          <Link to="/">Just click here</Link> :)
        </TextBody>
      </div>
    </Layout>
  )
}

export default NotFoundPage
