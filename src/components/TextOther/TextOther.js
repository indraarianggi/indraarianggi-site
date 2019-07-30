/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import textOtherStyles from "./TextOther.module.scss"

/** Component */
const TextOther = ({ value }) => {
  return <p className={textOtherStyles.text_other}>{value}</p>
}

TextOther.propTypes = {
  value: PropTypes.string.isRequired,
}

export default TextOther
