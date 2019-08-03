/** Dependencies */
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

/** Imported Components */
import TextOther from "../TextOther/TextOther"

/** Style */
import tagStyles from "./Tag.module.scss"

/** Component */
const Tag = ({ text, disabled, className }) => {
  const tagElement = disabled ? (
    <TextOther text={`#${text}`} className={tagStyles.lowercase} />
  ) : (
    <Link to={`/tag/${text}`}>
      <TextOther text={`#${text}`} className={tagStyles.lowercase} />
    </Link>
  )

  return <div className={`${tagStyles.tag} ${className}`}>{tagElement}</div>
}

Tag.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

Tag.defaultProps = {
  text: "",
  disabled: false,
  className: "",
}

export default Tag
