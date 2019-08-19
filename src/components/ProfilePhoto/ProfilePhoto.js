/** Dependencies */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

/** Style */
import ppStyles from "./ProfilePhoto.module.scss"

/** Component */
const ProfilePhoto = ({ circle, className }) => {
  // get data from yaml file
  const data = useStaticQuery(graphql`
    query {
      authorYaml {
        name
        avatar {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  `)

  return (
    <div
      className={`${
        circle ? ppStyles.photoCircle : ppStyles.photo
      } ${className}`}
    >
      <img
        src={data.authorYaml.avatar.childImageSharp.fixed.src}
        alt={data.authorYaml.name}
      />
    </div>
  )
}

ProfilePhoto.propTypes = {
  circle: PropTypes.bool,
  className: PropTypes.string,
}

ProfilePhoto.defaultProps = {
  circle: false,
  className: null,
}

export default ProfilePhoto
