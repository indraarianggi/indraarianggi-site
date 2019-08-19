/** Dependencies */
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

/** Style */
import footerStyles from "./Footer.module.scss"

const Footer = ({ className }) => {
  // get data from site metadata and yaml file
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          last_edit
        }
      }
      authorYaml {
        name
      }
    }
  `)

  return (
    <footer className={`${footerStyles.footer} ${className}`}>
      <span>
        &copy; {data.site.siteMetadata.last_edit} {data.authorYaml.name}
      </span>
      <div>
        <Link to="/tags">All Tag</Link> | <Link to="/credits">Credits</Link>
      </div>
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
