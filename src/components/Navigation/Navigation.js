/** Dependencies */
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

/** Style */
import navStyles from "./Navigation.module.scss"

/** Component */
const Navigation = ({ menus }) => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.menuList}>
        {menus.map(menu => (
          <li key={menu.name}>
            <Link
              to={`${menu.url}`}
              className={navStyles.menuItem}
              activeClassName={navStyles.menuActive}
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
}

export default Navigation
