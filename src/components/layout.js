import React from "react"
import Footer from "./Footer/Footer"
import CardPost from "./CardPost/CardPost"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

import photo from "../images/indraarianggi.jpg"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        {props.children}
        <CardPost
          imgPath={photo}
          url="/blog/P001"
          title="Lorem ipsum dolor"
          date="Jun 7th, 2019"
          tags={["lorem", "ipsum", "dolor"]}
        />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
