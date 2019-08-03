/** Dependencies */
import React from "react"
import { Link } from "gatsby"

/** Style */
import footerStyles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <span>&copy; 2019 Indra Arianggi</span>
      <Link to="/#">Credits</Link>
    </footer>
  )
}

export default Footer
