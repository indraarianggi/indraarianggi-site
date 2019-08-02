/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import lineStyles from "./Line.module.scss"

/** Component */
const Line = ({ primary, bold }) => {
  const color = primary ? lineStyles.primary : null

  const size = bold ? lineStyles.bold : ""

  return <div className={`${lineStyles.line} ${color} ${size}`}></div>
}

Line.propTypes = {
  primary: PropTypes.bool,
  bold: PropTypes.bool,
}

Line.defaultProps = {
  primary: false,
  bold: false,
}

export default Line
