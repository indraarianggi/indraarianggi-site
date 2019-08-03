import React from "react"
import Footer from "./Footer/Footer"
import Title from "./Title/Title"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        {props.children}
        <Title text="Lorem Ipsum" />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
