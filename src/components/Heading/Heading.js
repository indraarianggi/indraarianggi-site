/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import "./Heading.module.scss"

/** Component */
const Heading = ({ value }) => {
  return <h1>{value}</h1>
}

Heading.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Heading
