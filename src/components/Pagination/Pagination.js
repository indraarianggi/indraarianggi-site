/** Dependencies */
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

/** Style */
import paginationStyles from "./Pagination.module.scss"

const Pagination = ({ numPages, currentPage, context, className }) => {
  if (numPages <= 1) {
    return null
  }

  return (
    <ul className={`${paginationStyles.pagination} ${className}`}>
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
              <span className={paginationStyles.paginationLink}>{index}</span>
            ) : (
              <Link to={link} className={paginationStyles.paginationLink}>
                {index}
              </Link>
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
