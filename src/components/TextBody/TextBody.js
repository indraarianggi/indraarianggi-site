/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import textBodyStyles from "./TextBody.module.scss"

/** Component */
const TextBody = ({ children }) => {
  return <div className={textBodyStyles.text_body}>{children}</div>
}

export default TextBody
