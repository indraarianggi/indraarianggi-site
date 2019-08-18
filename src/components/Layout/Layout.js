/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Imported Components */
import SEO from "../SEO/SEO"
import Navigation from "../Navigation/Navigation"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import CardProfile from "../CardProfile/CardProfile"
import Footer from "../Footer/Footer"

/** Styles */
import "../../styles/index.scss"
import layoutStyles from "./Layout.module.scss"

const Layout = ({ children, seo, withPhoto }) => {
  const sidebar = withPhoto ? (
    <ProfilePhoto className={layoutStyles.marginTopMd} />
  ) : (
    <CardProfile
      className={`${layoutStyles.marginTopMd} ${layoutStyles.cardProfile}`}
    />
  )

  return (
    <div className={layoutStyles.container}>
      <SEO {...seo} />
      <aside className={layoutStyles.aside}>
        <Navigation className={layoutStyles.nav} />
        {sidebar}
      </aside>
      <main className={layoutStyles.main}>{children}</main>
      <Footer className={layoutStyles.footer} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
  ]),
  withPhoto: PropTypes.bool,
}

Layout.defaultProps = {
  withPhoto: false,
}

export default Layout
