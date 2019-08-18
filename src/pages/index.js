/** Dependencies */
import React from "react"
import { graphql } from "gatsby"

/** Imported Components */
import Layout from "../components/Layout/Layout"
import TextBody from "../components/TextBody/TextBody"
import Heading from "../components/Heading/Heading"
import Title from "../components/Title/Title"
import Button from "../components/Button/Button"
import SocialMedia from "../components/SocialMedia/SocialMedia"
import CardLogo from "../components/CardLogo/CardLogo"

/** Style */
import pageStyles from "./page.module.scss"

const Home = ({ data }) => {
  const technologies = data.allTechnologyYaml.edges.map(edge => {
    const { name, image } = edge.node

    return (
      <CardLogo
        key={name}
        imgPath={image.childImageSharp.fluid.src}
        alt={name}
        className={pageStyles.cardLogo}
      />
    )
  })

  const experiences = data.allExperienceYaml.edges.map(edge => {
    const { name, image } = edge.node

    return (
      <CardLogo
        key={name}
        imgPath={image.childImageSharp.fluid.src}
        alt={name}
        className={pageStyles.cardLogo}
      />
    )
  })

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
        <div>{technologies}</div>
      </div>
      <div className={pageStyles.section}>
        <Title text="Experience" />
        <TextBody>
          <p>Where I have worked? Here is the list.</p>
        </TextBody>
        <div>{experiences}</div>
      </div>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    allTechnologyYaml {
      edges {
        node {
          name
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
    allExperienceYaml {
      edges {
        node {
          name
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`
