/** Dependencies */
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

/** Imported Components */
import TextOther from "../TextOther/TextOther"

/** Style */
import tagStyles from "./Tag.module.scss"

/** Component */
const Tag = ({ value }) => {
  return (
    <div className={tagStyles.tag}>
      <Link to={`/tag/${value}`}>
        <TextOther value={`#${value}`} />
      </Link>
    </div>
  )
}

Tag.propTypes = {
  value: PropTypes.string,
}

Tag.defaultProps = {
  value: "",
}

export default Tag
