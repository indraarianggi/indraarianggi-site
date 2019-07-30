/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import buttonStyles from "./Button.module.scss"

/** Component */
const Button = ({ value, type, style, block, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`${buttonStyles.btn} ${block ? buttonStyles.block : ""} ${
        buttonStyles[type]
      } ${buttonStyles[style]}`}
    >
      {value}
    </button>
  )
}

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  value: "",
  type: "",
  style: "",
  block: false,
  disabled: false,
}

export default Button
