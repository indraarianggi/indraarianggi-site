/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import postImageStyles from "./PostImage.module.scss"

/** Component */
const PostImage = ({ imgPath, alt, className }) => {
  return (
    <img
      src={imgPath}
      alt={alt}
      className={`${postImageStyles.postImg} ${className}`}
    />
  )
}

PostImage.propTypes = {
  imgPath: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
}

PostImage.defaultProps = {
  alt: null,
  className: null,
}

export default PostImage
