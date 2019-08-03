/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import subtitleStyles from "./Subtitle.module.scss"

/** Component */
const Subtitle = ({ value, className }) => {
  return <h2 className={`${subtitleStyles.subtitle} ${className}`}>{value}</h2>
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Subtitle.defaultProps = {
  className: "",
}

export default Subtitle
