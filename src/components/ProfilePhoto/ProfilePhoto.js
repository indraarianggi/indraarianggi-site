/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import ppStyles from "./ProfilePhoto.module.scss"

/** Assets */
import photo from "../../images/indraarianggi.png"

/** Component */
const ProfilePhoto = ({ circle, className }) => {
  return (
    <div
      className={`${
        circle ? ppStyles.photoCircle : ppStyles.photo
      } ${className}`}
    >
      <img src={photo} alt="Indra Arianggi" />
    </div>
  )
}

ProfilePhoto.propTypes = {
  circle: PropTypes.bool,
  className: PropTypes.string,
}

ProfilePhoto.defaultProps = {
  circle: false,
  className: "",
}

export default ProfilePhoto
