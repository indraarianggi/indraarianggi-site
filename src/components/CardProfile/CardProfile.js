/** Dependencies */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

/** Imported Components */
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import Subtitle from "../Subtitle/Subtitle"
import TextOther from "../TextOther/TextOther"
import SocialMedia from "../SocialMedia/SocialMedia"
import Line from "../Line/Line"
import Tag from "../Tag/Tag"

/** Style */
import cardProfileStyles from "./CardProfile.module.scss"

/** Component */
const CardProfile = ({ className }) => {
  // get data from yaml file and markdown
  const data = useStaticQuery(graphql`
    query {
      authorYaml {
        name
        job
      }
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  let tags = []

  data.allMarkdownRemark.group.map(tag => {
    tags.push(tag.fieldValue)

    return true // just to avoid warning -> because .map expected a return value
  })

  return (
    <div className={`${cardProfileStyles.cardProfile} ${className}`}>
      <ProfilePhoto circle />
      <Subtitle
        className={`${cardProfileStyles.center} ${cardProfileStyles.marginTopXs}`}
        text={data.authorYaml.name}
      />
      <TextOther
        className={`${cardProfileStyles.center} ${cardProfileStyles.marginTopXxs}`}
        text={data.authorYaml.job}
      />
      <SocialMedia className={cardProfileStyles.socialList} />
      <Line className={cardProfileStyles.marginTopMd} />
      <div
        className={`${cardProfileStyles.tags} ${cardProfileStyles.marginTopMd}`}
      >
        {tags.map(tag => (
          <Tag key={tag} text={tag} className={cardProfileStyles.tagItem} />
        ))}
      </div>
    </div>
  )
}

CardProfile.propTypes = {
  className: PropTypes.string,
}

CardProfile.defaultProps = {
  className: "",
}

export default CardProfile
