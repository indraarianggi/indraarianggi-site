/** Dependencies */
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

/** Style */
import navStyles from "./Navigation.module.scss"

/** Component */
const Navigation = ({ className }) => {
  // Querying data menus from yaml file
  const data = useStaticQuery(graphql`
    query {
      allMainMenuYaml {
        edges {
          node {
            label
            link
          }
        }
      }
    }
  `)

  const menuItems = data.allMainMenuYaml.edges.map(edge => {
    const { label, link } = edge.node

    return (
      <li key={label}>
        <Link
          to={`${link}`}
          className={navStyles.menuItem}
          activeClassName={navStyles.menuActive}
        >
          {label}
        </Link>
      </li>
    )
  })

  return (
    <nav className={`${navStyles.nav} ${className}`}>
      <ul className={navStyles.menuList}>{menuItems}</ul>
    </nav>
  )
}

Navigation.propTypes = {
  className: PropTypes.string,
}

Navigation.defaultProps = {
  className: "",
}

export default Navigation
