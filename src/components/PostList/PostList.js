/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Imported Components */
import CardPost from "../CardPost/CardPost"

/** Style */
import postListStyle from "./PostList.module.scss"

const PostList = ({ posts, className }) => {
  return (
    <div className={`${postListStyle.postList} ${className}`}>
      {posts.map(post => (
        <div
          key={post.title}
          className={`${postListStyle.postItem} ${postListStyle.marginBottomMd}`}
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
  className: "",
}

export default PostList
