import React from "react"
import Footer from "./footer"
import Heading from "./Heading/Heading"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        {props.children}
        <Heading value="Indra Arianggi Suryaatmaja" />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
