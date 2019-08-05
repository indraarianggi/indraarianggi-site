/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import buttonStyles from "./Button.module.scss"

/** Component */
const Button = ({ text, color, type, block, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`${buttonStyles.btn} ${block ? buttonStyles.block : ""} ${
        buttonStyles[color]
      } ${buttonStyles[type]}`}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["", "primary", "secondary"]),
  type: PropTypes.oneOf(["", "line"]),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  text: "",
  color: "",
  type: "",
  block: false,
  disabled: false,
}

export default Button
