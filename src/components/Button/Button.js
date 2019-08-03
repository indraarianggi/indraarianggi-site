/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import buttonStyles from "./Button.module.scss"

/** Component */
const Button = ({ text, type, style, block, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`${buttonStyles.btn} ${block ? buttonStyles.block : ""} ${
        buttonStyles[type]
      } ${buttonStyles[style]}`}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["", "primary", "secondary"]),
  style: PropTypes.oneOf(["", "line"]),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  text: "",
  type: "",
  style: "",
  block: false,
  disabled: false,
}

export default Button
