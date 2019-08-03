/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import textOtherStyles from "./TextOther.module.scss"

/** Component */
const TextOther = ({ value, className }) => {
  return <p className={`${textOtherStyles.text_other} ${className}`}>{value}</p>
}

TextOther.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
}

TextOther.defaultProps = {
  className: "",
}

export default TextOther
