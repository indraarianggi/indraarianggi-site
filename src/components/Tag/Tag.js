/** Dependencies */
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

/** Imported Components */
import TextOther from "../TextOther/TextOther"

/** Style */
import tagStyles from "./Tag.module.scss"

/** Component */
const Tag = ({ value, disabled, className }) => {
  const tagElement = disabled ? (
    <TextOther value={`#${value}`} />
  ) : (
    <Link to={`/tag/${value}`}>
      <TextOther value={`#${value}`} />
    </Link>
  )

  return <div className={`${tagStyles.tag} ${className}`}>{tagElement}</div>
}

Tag.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

Tag.defaultProps = {
  value: "",
  disabled: false,
  className: "",
}

export default Tag
