/** Dependencies */
import React from "react"
import { graphql } from "gatsby"

/** Imported Components */
import Layout from "../Layout/Layout"
import Title from "../Title/Title"
import TextOther from "../TextOther/TextOther"
import Tag from "../Tag/Tag"
import PostImage from "../PostImage/PostImage"
import TextBody from "../TextBody/TextBody"

/** Style */
import contentLayoutStyle from "./ContentLayout.module.scss"

const ContentLayout = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const imageSource = frontmatter.image.childImageSharp.fluid.src

  return (
    <Layout>
      <Title text={frontmatter.title} />
      <TextOther
        text={frontmatter.date}
        className={contentLayoutStyle.marginTopXs}
      />
      <div className={contentLayoutStyle.marginTopXs}>
        {frontmatter.tags.map(tag => (
          <Tag
            key={tag}
            text={tag}
            className={contentLayoutStyle.marginRightXs}
          />
        ))}
      </div>
      <PostImage
        imgPath={imageSource}
        alt={frontmatter.title}
        className={contentLayoutStyle.marginTopMd}
      />
      <TextBody>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TextBody>
    </Layout>
  )
}

export default ContentLayout

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
`
