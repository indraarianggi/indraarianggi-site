/** Dependencies */
import React from "react"
import { graphql } from "gatsby"

/** Imported Components */
import Layout from "../Layout/Layout"
import Title from "../Title/Title"
import Line from "../Line/Line"
import PostList from "../PostList/PostList"

/** Style */
import tagPageStyles from "./TagPage.module.scss"

const TagPage = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const { tag } = pageContext

  let posts = []

  allMarkdownRemark.edges.map(item => {
    const { fields, frontmatter } = item.node

    posts.push({
      imgPath: frontmatter.image.childImageSharp.fluid.src,
      url: fields.slug,
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
    })

    return true // just to avoid warning -> because .map expected a return value
  })

  return (
    <Layout>
      <Title text={`Tag: ${tag}`} />
      <Line primary bold />
      <PostList posts={posts} className={tagPageStyles.marginTopMd} />
    </Layout>
  )
}

export default TagPage

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
