/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import subtitleStyles from "./Subtitle.module.scss"

/** Component */
const Subtitle = ({ text, className }) => {
  return <h3 className={`${subtitleStyles.subtitle} ${className}`}>{text}</h3>
}

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Subtitle.defaultProps = {
  className: null,
}

export default Subtitle
