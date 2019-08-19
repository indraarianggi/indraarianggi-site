/** Dependencies */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

/** Imported Components */
import ButtonIcon from "../ButtonIcon/ButtonIcon"

/** Style */
import socmedStyles from "./SocialMedia.module.scss"

/** Component */
const SocialMedia = ({ className }) => {
  // get data from yaml file
  const data = useStaticQuery(graphql`
    query {
      authorYaml {
        account {
          label
          link
          image {
            childImageSharp {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ul className={`${socmedStyles.socmedList} ${className}`}>
      {data.authorYaml.account.map(acc => (
        <li key={acc.label}>
          <ButtonIcon
            url={acc.link}
            iconPath={acc.image.childImageSharp.fixed.src}
            alt={acc.label}
          />
        </li>
      ))}
    </ul>
  )
}

SocialMedia.propTypes = {
  className: PropTypes.string,
}

SocialMedia.defaultProps = {
  className: null,
}

export default SocialMedia
