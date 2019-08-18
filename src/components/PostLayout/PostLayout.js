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
import postLayoutStyle from "./PostLayout.module.scss"

const PostLayout = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark
  const imageSource = frontmatter.image.childImageSharp.fluid.src

  // For seo metadata
  const seo = {
    title: frontmatter.title,
    description: frontmatter.description,
    pathname: `${location.pathname}`,
    image: `${imageSource}`,
    article: true,
  }

  return (
    <Layout seo={seo}>
      <Title text={frontmatter.title} />
      <TextOther
        text={frontmatter.date}
        className={postLayoutStyle.marginTopXs}
      />
      <div className={postLayoutStyle.marginTopXs}>
        {frontmatter.tags.map(tag => (
          <Tag key={tag} text={tag} className={postLayoutStyle.marginRightXs} />
        ))}
      </div>
      <PostImage
        imgPath={imageSource}
        alt={frontmatter.title}
        className={postLayoutStyle.marginTopMd}
      />
      <TextBody>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </TextBody>
    </Layout>
  )
}

export default PostLayout

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
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
