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
import { DiscussionEmbed } from "disqus-react"

/** Style */
import postLayoutStyle from "./PostLayout.module.scss"

const PostLayout = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark
  const imageSource = frontmatter.image.childImageSharp.fluid.src

  // For seo metadata
  const seo = {
    title: `${frontmatter.category.charAt(0).toUpperCase() +
      frontmatter.category.slice(1)} - ${frontmatter.title}`,
    description: frontmatter.description,
    pathname: `${location.pathname}`,
    image: `${imageSource}`,
    article: true,
  }

  // Disqus Configuration
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: location.pathname },
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
      <div className={postLayoutStyle.marginTopLg}>
        <DiscussionEmbed {...disqusConfig} />
      </div>
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
        category
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
