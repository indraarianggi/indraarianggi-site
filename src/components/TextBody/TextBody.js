/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import textBodyStyles from "./TextBody.module.scss"

/** Component */
const TextBody = ({ children, className }) => {
  return (
    <div className={`${textBodyStyles.textBody} ${className}`}>{children}</div>
  )
}

TextBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
  ]),
  className: PropTypes.string,
}

TextBody.defaultProps = {
  className: null,
}

export default TextBody
