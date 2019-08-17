/** Dependencies */
import React from "react"

/** Imported Components */
import Layout from "../components/Layout/Layout"
import TextBody from "../components/TextBody/TextBody"
import Heading from "../components/Heading/Heading"
import Title from "../components/Title/Title"
import Button from "../components/Button/Button"
import SocialMedia from "../components/SocialMedia/SocialMedia"
import CardLogo from "../components/CardLogo/CardLogo"

/** Assets */
import techHtml from "../images/html5.svg"
import techCss from "../images/css3.svg"
import techJs from "../images/javascript.svg"
import techNode from "../images/nodejs.svg"
import techExpress from "../images/express.svg"
import techReact from "../images/react.svg"
import techMongo from "../images/mongodb.svg"
import techPhp from "../images/php.svg"
import techCi from "../images/codeigniter.svg"
import techMysql from "../images/mysql.svg"
import techAi from "../images/ai.svg"
import techXd from "../images/xd.svg"
import techFigma from "../images/figma.svg"
import expIndorelawan from "../images/indorelawan.png"
import expMaentrus from "../images/maentrus.png"
import expLabti from "../images/labti.jpeg"

/** Style */
import pageStyles from "./page.module.scss"

const Home = () => {
  const techs = [
    {
      name: "HTML5",
      image: techHtml,
    },
    {
      name: "CSS3",
      image: techCss,
    },
    {
      name: "JavaScript",
      image: techJs,
    },
    {
      name: "NodeJs",
      image: techNode,
    },
    {
      name: "ExpressJs",
      image: techExpress,
    },
    {
      name: "React",
      image: techReact,
    },
    {
      name: "MongoDb",
      image: techMongo,
    },
    {
      name: "PHP",
      image: techPhp,
    },
    {
      name: "CodeIgniter",
      image: techCi,
    },
    {
      name: "MySql",
      image: techMysql,
    },
    {
      name: "Adobe Illustrator",
      image: techAi,
    },
    {
      name: "Adobe Xd",
      image: techXd,
    },
    {
      name: "Figma",
      image: techFigma,
    },
  ]

  const exps = [
    {
      name: "Indorelawan",
      image: expIndorelawan,
    },
    {
      name: "Maentrus Digital Lab",
      image: expMaentrus,
    },
    {
      name: "LabTI Universitas Gunadarma",
      image: expLabti,
    },
  ]

  return (
    <Layout withPhoto>
      <div className={pageStyles.sectionIntro}>
        <div className={pageStyles.intro}>
          <TextBody>Hello, my name is</TextBody>
          <Heading text="Indra Arianggi S" />
          <TextBody>
            <p>
              I’m a Full Stack Web Developer, which focus on the JavaScript
              programming language. Also interested in UI/UX design and practice
              it recently.
            </p>
          </TextBody>
          <div className={pageStyles.marginTopLg}>
            <Button text="Get In Touch" color="primary" />
          </div>
          <SocialMedia
            className={`${pageStyles.socialMedia} ${pageStyles.marginTopLg}`}
          />
        </div>
      </div>
      <div className={pageStyles.section}>
        <Title text="Technologies" />
        <TextBody>
          <p>Here are a few technologies I have been working with.</p>
        </TextBody>
        <div>
          {techs.map(tech => (
            <CardLogo
              key={tech.name}
              imgPath={tech.image}
              alt={tech.name}
              className={pageStyles.cardLogo}
            />
          ))}
        </div>
      </div>
      <div className={pageStyles.section}>
        <Title text="Experience" />
        <TextBody>
          <p>Where I have worked? Here is the list.</p>
        </TextBody>
        <div>
          {exps.map(exp => (
            <CardLogo
              key={exp.name}
              imgPath={exp.image}
              alt={exp.name}
              className={pageStyles.cardLogo}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
