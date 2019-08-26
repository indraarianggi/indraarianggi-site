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
      allFaviconYaml {
        edges {
          node {
            tag
            rel
            sizes
            type
            href {
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
  `)

  // Extract siteMetadata results
  const { defaultTitle, defaultDescription, siteUrl } = data.site.siteMetadata

  const defaultImage = siteIcon

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || "/"}`,
    image: `${siteUrl}${image || defaultImage}`,
  }

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      {/* <!-- Primary Meta Tags --> */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="theme-color" content="#3ca370" />
      <meta name="image" content={seo.image} />
      <link rel="icon" type="image/png" href={defaultImage} />

      {/* <!-- Icons --> */}
      {
        data.allFaviconYaml.edges.map(edge => {
          const { tag, rel, sizes, type, href } = edge.node
          const image = href.childImageSharp.fluid.src
          
          if (tag === "link") {
            if (type) {
              return (
                <link key={rel} rel={rel} type={type} sizes={sizes} href={image} />
              )
            } else {
              return (
                <link key={rel} rel={rel} sizes={sizes} href={image} />
              )
            }
          } else {
            return (
              <meta key={rel} name={rel} content={image} />
            )
          }
        })
      }

      {/* <!-- Open Graph / Facebook --> */}
      {article ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}

      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.url && <meta property="twitter:url" content={seo.url} />}
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
