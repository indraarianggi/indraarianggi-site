import React from "react"
import Footer from "./footer"
import CardLogo from "./CardLogo/CardLogo"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        {props.children}
        <CardLogo />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
