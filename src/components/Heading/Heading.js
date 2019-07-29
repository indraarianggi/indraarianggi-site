/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import headingStyles from "./Heading.module.scss"

/** Component */
const Heading = ({ value }) => {
  return <h1 className={headingStyles.heading}>{value}</h1>
}

Heading.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Heading
