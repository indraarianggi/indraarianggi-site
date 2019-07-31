/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Style */
import postImageStyles from "./PostImage.module.scss"

/** Component */
const PostImage = ({ imgPath, alt }) => {
  return <img src={imgPath} alt={alt} className={postImageStyles.post_img} />
}

PostImage.propTypes = {
  imgPath: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

PostImage.defaultProps = {
  alt: "",
}

export default PostImage
