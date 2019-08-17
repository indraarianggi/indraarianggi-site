/** Dependencies */
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

/** Style */
import paginationStyles from "./Pagination.module.scss"

const Pagination = ({ numPages, currentPage, context }) => {
  if (numPages <= 1) {
    return null
  }

  return (
    <ul className={paginationStyles.pagination}>
      {Array.from({ length: numPages }).map((item, i) => {
        const index = i + 1

        const baseLink = `/${context}`
        const link = index === 1 ? baseLink : `${baseLink}/page/${index}`

        return (
          <li
            key={index}
            className={`${paginationStyles.paginationItem} ${
              currentPage === index ? paginationStyles.active : null
            }`}
          >
            {currentPage === index ? (
              <span>{index}</span>
            ) : (
              <Link to={link}>{index}</Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

Pagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  context: PropTypes.oneOf(["blog", "work"]).isRequired,
  className: PropTypes.string,
}

Pagination.defaultProps = {
  className: "",
}

export default Pagination
