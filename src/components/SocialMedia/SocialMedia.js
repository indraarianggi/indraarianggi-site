/** Dependencies */
import React from "react"
import PropTypes from "prop-types"

/** Imported Components */
import ButtonIcon from "../ButtonIcon/ButtonIcon"

/** Assets */
import iconLinkedin from "../../images/linkedin.svg"
import iconGithub from "../../images/github.svg"
import iconBehance from "../../images/behance.svg"
import iconInstagram from "../../images/instagram.svg"

/** Style */
import socmedStyles from "./SocialMedia.module.scss"

/** Component */
const SocialMedia = ({ className }) => {
  const socials = [
    {
      name: "LinkedIn",
      icon: iconLinkedin,
      url: "https://www.linkedin.com/in/indraarianggi/",
    },
    {
      name: "GitHub",
      icon: iconGithub,
      url: "https://github.com/indraarianggi",
    },
    {
      name: "Behance",
      icon: iconBehance,
      url: "https://www.behance.net/indraarianggi",
    },
    {
      name: "Instagram",
      icon: iconInstagram,
      url: "https://www.instagram.com/indraarianggi_/",
    },
  ]

  return (
    <ul className={`${socmedStyles.socmedList} ${className}`}>
      {socials.map(item => (
        <li key={item.name}>
          <ButtonIcon url={item.url} iconPath={item.icon} alt={item.name} />
        </li>
      ))}
    </ul>
  )
}

SocialMedia.propTypes = {
  className: PropTypes.string,
}

SocialMedia.defaultProps = {
  className: "",
}

export default SocialMedia
