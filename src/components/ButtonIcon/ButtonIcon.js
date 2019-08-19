/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import buttonIconStyles from "./ButtonIcon.module.scss"

/** Component */
const ButtonIcon = ({ url, iconPath, alt }) => {
  return (
    <a
      href={url}
      className={buttonIconStyles.btnIcon}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={iconPath} alt={alt} />
    </a>
  )
}

ButtonIcon.propTypes = {
  url: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

ButtonIcon.defaultProps = {
  alt: "",
}

export default ButtonIcon
