/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import lineStyles from "./Line.module.scss"

/** Component */
const Line = ({ primary, bold, className }) => {
  const color = primary ? lineStyles.primary : null

  const size = bold ? lineStyles.bold : ""

  return (
    <div className={`${lineStyles.line} ${color} ${size} ${className}`}></div>
  )
}

Line.propTypes = {
  primary: PropTypes.bool,
  bold: PropTypes.bool,
  className: PropTypes.string,
}

Line.defaultProps = {
  primary: false,
  bold: false,
  className: null,
}

export default Line
