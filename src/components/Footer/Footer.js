/** Dependencies */
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

/** Style */
import footerStyles from "./Footer.module.scss"

const Footer = () => {
  // get data from site metadata
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          site {
            last_edit
          }
          author {
            name
          }
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <span>&copy; {data.site.siteMetadata.site.last_edit} {data.site.siteMetadata.author.name}</span>
      <Link to="/credits">Credits</Link>
    </footer>
  )
}

export default Footer
