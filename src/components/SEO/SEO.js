/**
 * Source: https://www.gatsbyjs.org/docs/add-seo-component/
 */

/** Dependecies */
import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

/** Assets */
import siteIcon from "../../images/favicon.png"

const SEO = ({ title, description, pathname, image, article }) => {
  // Querying data from siteMetadata
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl: url
        }
      }
    }
  `)

  // Extract results data
  const { defaultTitle, defaultDescription, siteUrl } = data.site.siteMetadata

  const defaultImage = siteIcon

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || "/"}`,
    image: `${siteUrl}${image || defaultImage}`,
  }

  return (
    <Helmet title={seo.title}>
      <link rel="icon" type="image/png" href={defaultImage} />

      <meta name="theme-color" content="#3ca370" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
