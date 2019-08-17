/** Dependencies */
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

/** Style */
import footerStyles from "./Footer.module.scss"

const Footer = ({ className }) => {
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
    <footer className={`${footerStyles.footer} ${className}`}>
      <span>
        &copy; {data.site.siteMetadata.site.last_edit}{" "}
        {data.site.siteMetadata.author.name}
      </span>
      <Link to="/credits">Credits</Link>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

Footer.defaultProps = {
  className: "",
}

export default Footer
