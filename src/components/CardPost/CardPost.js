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
const CardPost = ({ imgPath, url, title, date, tags }) => {
  return (
    <div className={cardPostStyles.card_post}>
      <Link to={url}>
        <div className={cardPostStyles.post_img}>
          <PostImage imgPath={imgPath} />
        </div>
        <div className={cardPostStyles.post_detail}>
          <Subtitle value={title} />
          <TextOther value={date} className={cardPostStyles.margin_top_xxs} />
        </div>
        {tags.length > 0 ? (
          <div className={cardPostStyles.post_tags}>
            {tags.map(tag => (
              <Tag
                key={tag}
                value={tag}
                disabled
                className={cardPostStyles.tag_item}
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
  tags: PropTypes.array,
}

CardPost.defaultProps = {
  tags: [],
}

export default CardPost
