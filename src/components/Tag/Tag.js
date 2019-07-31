/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Imported Components */
import TextOther from "../TextOther/TextOther"

/** Style */
import tagStyles from "./Tag.module.scss"

/** Component */
const Tag = ({ value }) => {
  return (
    <div className={tagStyles.tag}>
      <TextOther value={`#${value}`} />
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
