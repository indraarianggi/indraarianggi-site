/** Dependencies */
import React from "react"
import { graphql } from "gatsby"

/** Imported Components */
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import Line from "../components/Line/Line"
import Tag from "../components/Tag/Tag"

/** Style */
import tagsStyles from "./page.module.scss"

const Tags = ({ data }) => {
  let tags = []

  data.allMarkdownRemark.group.map(tag => {
    tags.push(tag.fieldValue)

    return true // just to avoid warning -> because .map expected a return value
  })

  return (
    <Layout>
      <Title text="All Tag" />
      <Line primary bold />
      <div className={`${tagsStyles.tags} ${tagsStyles.marginTopMd}`}>
        {tags.map(tag => (
          <Tag key={tag} text={tag} className={tagsStyles.tagItem} />
        ))}
      </div>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`
