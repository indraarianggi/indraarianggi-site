import React from "react"
import Footer from "./footer"
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

import photo from "../images/indraarianggi.jpg"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        {props.children}
        <ProfilePhoto imgPath={photo} circle />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
