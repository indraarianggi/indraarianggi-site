/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import cardLogoStyles from "./CardLogo.module.scss"

/** Component */
const CardLogo = ({ imgPath, alt, className }) => {
  return (
    <div className={`${cardLogoStyles.card} ${className}`}>
      <img src={imgPath} alt={alt} />
    </div>
  )
}

CardLogo.propTypes = {
  imgPath: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
}

CardLogo.defaultProps = {
  alt: null,
  className: null,
}

export default CardLogo
