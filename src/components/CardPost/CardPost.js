/** Dependencies */
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

/** Imported Components */
import PostImage from "../PostImage/PostImage"
import Subtitle from "../Subtitle/Subtitle"
import TextOther from "../TextOther/TextOther"
import Tag from "../Tag/Tag"

/** Style */
import cardPostStyles from "./CardPost.module.scss"

/** Component */
const CardPost = ({ imgPath, url, title, date, tags, className }) => {
  return (
    <div className={`${cardPostStyles.cardPost} ${className}`}>
      <Link to={url}>
        <div className={cardPostStyles.postImg}>
          <PostImage imgPath={imgPath} />
        </div>
        <div className={cardPostStyles.postDetail}>
          <Subtitle text={title} />
          <TextOther text={date} className={cardPostStyles.marginTopXxs} />
        </div>
        {tags.length > 0 ? (
          <div className={cardPostStyles.postTags}>
            {tags.map(tag => (
              <Tag
                key={tag}
                text={tag}
                disabled
                className={cardPostStyles.tagItem}
              />
            ))}
          </div>
        ) : null}
      </Link>
    </div>
  )
}

CardPost.propTypes = {
  imgPath: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
}

CardPost.defaultProps = {
  tags: [],
  className: null,
}

export default CardPost
