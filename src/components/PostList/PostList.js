/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Imported Components */
import CardPost from "../CardPost/CardPost"

/** Style */
import postListStyles from "./PostList.module.scss"

const PostList = ({ posts, className }) => {
  return (
    <div className={`${postListStyles.postList} ${className}`}>
      {posts.map(post => (
        <div
          key={post.title}
          className={`${postListStyles.postItem} ${postListStyles.marginBottomMd}`}
        >
          <CardPost {...post} />
        </div>
      ))}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      imgPath: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
    }).isRequired
  ),
  className: PropTypes.string,
}

PostList.defaultProps = {
  className: null,
}

export default PostList
