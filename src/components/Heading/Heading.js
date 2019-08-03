/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import headingStyles from "./Heading.module.scss"

/** Component */
const Heading = ({ text }) => {
  return <h1 className={headingStyles.heading}>{text}</h1>
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Heading
