/** Dependencies */
import React from "react"
import { graphql } from "gatsby"

/** Imported Components */
import Layout from "../Layout/Layout"
import Title from "../Title/Title"
import Line from "../Line/Line"
import PostList from "../PostList/PostList"
import Pagination from "../Pagination/Pagination"

/** Style */
import workPageStyles from "./WorkPage.module.scss"

const WorkPage = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const { currentPage, numPages } = pageContext

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
      <Title text="Work" />
      <Line primary bold />
      <PostList posts={posts} className={workPageStyles.marginTopMd} />
      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        context="work"
        className={workPageStyles.pagination}
      />
    </Layout>
  )
}

export default WorkPage

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "work" } } }
      limit: $limit
      skip: $skip
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
