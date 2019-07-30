/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import cardLogoStyles from "./CardLogo.module.scss"

/** Component */
const CardLogo = ({ imgPath, alt }) => {
  return (
    <div className={cardLogoStyles.card}>
      <img src={imgPath} alt={alt} />
    </div>
  )
}

CardLogo.propTypes = {
  imgPath: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

CardLogo.defaultProps = {
  alt: "",
}

export default CardLogo
