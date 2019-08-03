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
          <li key={menu}>
            <Link
              key={menu}
              to={`/${menu}`}
              className={navStyles.menuItem}
              activeClassName={navStyles.menuActive}
            >
              {menu}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Navigation
