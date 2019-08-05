/** Dependencies */
import React from "react"

/** Imported Components */
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import Line from "../components/Line/Line"

const Blog = () => {
  return (
    <Layout>
      <Title text="Blog" />
      <Line primary bold />
    </Layout>
  )
}

export default Blog
