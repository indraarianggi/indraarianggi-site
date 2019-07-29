/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import titleStyles from "./Title.module.scss"

/** Component */
const Title = ({ value }) => {
  return <h1 className={titleStyles.title}>{value}</h1>
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Title
