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
      <ul className={navStyles.menu_list}>
        {menus.map(menu => (
          <li key={menu}>
            <Link
              key={menu}
              to={`/${menu}`}
              className={navStyles.menu_item}
              activeClassName={navStyles.menu_active}
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
  menus: PropTypes.array.isRequired,
}

export default Navigation
