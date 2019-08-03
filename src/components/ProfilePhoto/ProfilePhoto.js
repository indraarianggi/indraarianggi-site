/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import ppStyles from "./ProfilePhoto.module.scss"

/** Component */
const ProfilePhoto = ({ imgPath, alt, circle }) => {
  return (
    <div className={circle ? ppStyles.photoCircle : ppStyles.photo}>
      <img src={imgPath} alt={alt} />
    </div>
  )
}

ProfilePhoto.propTypes = {
  imgPath: PropTypes.string.isRequired,
  alt: PropTypes.string,
  circle: PropTypes.bool,
}

ProfilePhoto.defaultProps = {
  alt: "",
  circle: false,
}

export default ProfilePhoto
