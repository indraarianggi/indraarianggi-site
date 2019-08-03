/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import textOtherStyles from "./TextOther.module.scss"

/** Component */
const TextOther = ({ text, className }) => {
  return <p className={`${textOtherStyles.textOther} ${className}`}>{text}</p>
}

TextOther.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
}

TextOther.defaultProps = {
  className: "",
}

export default TextOther
