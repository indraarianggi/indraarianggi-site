/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Imported Components */
import PostImage from "../PostImage/PostImage"
import Subtitle from "../Subtitle/Subtitle"
import TextOther from "../TextOther/TextOther"
import Tag from "../Tag/Tag"

/** Style */
import cardPostStyles from "./CardPost.module.scss"

/** Component */
const CardPost = ({ imgPath, url, title, date, tags }) => {
  const tagList = tags.map(tag => <Tag key={tag} value={tag} />)

  return (
    <div className={cardPostStyles.card_post}>
      <a href={url}>
        <div className={cardPostStyles.post_img}>
          <PostImage imgPath={imgPath} />
        </div>
        <div className={cardPostStyles.post_detail}>
          <Subtitle value={title} />
          <TextOther value={date} />
        </div>
        {tagList.length > 0 ? (
          <div className={cardPostStyles.post_tags}>{tagList}</div>
        ) : null}
      </a>
    </div>
  )
}

CardPost.propTypes = {
  imgPath: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.array,
}

CardPost.defaultProps = {
  tags: [],
}

export default CardPost
