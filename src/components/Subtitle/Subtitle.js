/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import subtitleStyles from "./Subtitle.module.scss"

/** Component */
const Subtitle = ({ value }) => {
  return <h2 className={subtitleStyles.subtitle}>{value}</h2>
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Subtitle
