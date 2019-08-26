/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import titleStyles from "./Title.module.scss"

/** Component */
const Title = ({ text }) => {
  return <h2 className={titleStyles.title}>{text}</h2>
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Title
