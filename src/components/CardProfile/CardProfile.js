/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Imported Components */
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import Subtitle from "../Subtitle/Subtitle"
import TextOther from "../TextOther/TextOther"
import SocialMedia from "../SocialMedia/SocialMedia"
// import Line from "../Line/Line"
// import Tag from "../Tag/Tag"

/** Style */
import cardProfileStyles from "./CardProfile.module.scss"

/** Component */
const CardProfile = ({ className }) => {
  // const tags = [
  //   "lorem",
  //   "ipsum",
  //   "dolor",
  //   "sit",
  //   "amet",
  //   "html5",
  //   "css3",
  //   "javascript",
  //   "nodejs",
  //   "expressjs",
  //   "react",
  //   "mongodb",
  // ]

  return (
    <div className={`${cardProfileStyles.cardProfile} ${className}`}>
      <ProfilePhoto circle />
      <Subtitle
        className={`${cardProfileStyles.center} ${cardProfileStyles.marginTopXs}`}
        text="Indra Arianggi"
      />
      <TextOther
        className={`${cardProfileStyles.center} ${cardProfileStyles.marginTopXxs}`}
        text="Full Stack Web Developer"
      />
      <SocialMedia className={cardProfileStyles.socialList} />
    </div>
  )

  // <Line className={cardProfileStyles.marginTopMd} />
  //     <div
  //       className={`${cardProfileStyles.tags} ${cardProfileStyles.marginTopMd}`}
  //     >
  //       {tags.map(tag => (
  //         <Tag key={tag} text={tag} className={cardProfileStyles.tagItem} />
  //       ))}
  //     </div>
}

CardProfile.propTypes = {
  className: PropTypes.string,
}

CardProfile.defaultProps = {
  className: "",
}

export default CardProfile
