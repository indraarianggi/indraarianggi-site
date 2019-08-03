/** Dependencies */
import React from "react"

/** Imported Components */
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
import Subtitle from "../Subtitle/Subtitle"
import TextOther from "../TextOther/TextOther"
import ButtonIcon from "../ButtonIcon/ButtonIcon"
import Line from "../Line/Line"
import Tag from "../Tag/Tag"

/** Assets */
import photo from "../../images/indraarianggi.jpg"
import iconLinkedin from "../../images/linkedin.svg"
import iconGithub from "../../images/github.svg"
import iconBehance from "../../images/behance.svg"
import iconInstagram from "../../images/instagram.svg"

/** Style */
import cardProfileStyles from "./CardProfile.module.scss"

/** Component */
const CardProfile = () => {
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

  const tags = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "html5",
    "css3",
    "javascript",
    "nodejs",
    "expressjs",
    "react",
    "mongodb",
  ]

  return (
    <div className={cardProfileStyles.cardProfile}>
      <ProfilePhoto imgPath={photo} alt="Indra Arianggi" circle />
      <Subtitle
        className={`${cardProfileStyles.center} ${cardProfileStyles.marginTopXs}`}
        text="Indra Arianggi"
      />
      <TextOther
        className={`${cardProfileStyles.center} ${cardProfileStyles.marginTopXxs}`}
        text="Full Stack Web Developer"
      />
      <ul className={cardProfileStyles.socialList}>
        {socials.map(item => (
          <li key={item.name}>
            <ButtonIcon url={item.url} iconPath={item.icon} alt={item.name} />
          </li>
        ))}
      </ul>
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

export default CardProfile
