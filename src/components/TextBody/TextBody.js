/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import textBodyStyles from "./TextBody.module.scss"

/** Component */
const TextBody = ({ children }) => {
  return <div className={textBodyStyles.textBody}>{children}</div>
}

TextBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
  ]),
}

export default TextBody
