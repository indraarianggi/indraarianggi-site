/** Dependencies */
import React from "react"
import { graphql } from "gatsby"

/** Imported Components */
import Layout from "../components/Layout/Layout"
import TextBody from "../components/TextBody/TextBody"
import Heading from "../components/Heading/Heading"
import Title from "../components/Title/Title"
import SocialMedia from "../components/SocialMedia/SocialMedia"
import CardLogo from "../components/CardLogo/CardLogo"

/** Style */
import pageStyles from "./page.module.scss"

const Home = ({ data }) => {
  const technologies = data.allTechnologyYaml.edges.map(edge => {
    const { name, image } = edge.node

    return (
      <div
        key={name}
        className={`${pageStyles.cardItem} ${pageStyles.marginBottomMd}`}
      >
        <CardLogo imgPath={image.childImageSharp.fluid.src} alt={name} />
      </div>
    )
  })

  const experiences = data.allExperienceYaml.edges.map(edge => {
    const { name, image } = edge.node

    return (
      <div
        key={name}
        className={`${pageStyles.cardItem} ${pageStyles.marginBottomMd}`}
      >
        <CardLogo imgPath={image.childImageSharp.fluid.src} alt={name} />
      </div>
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
        <div className={pageStyles.postList}>{technologies}</div>
      </div>
      <div className={pageStyles.section}>
        <Title text="Experience" />
        <TextBody>
          <p>Where I have worked? Here is the list.</p>
        </TextBody>
        <div className={pageStyles.postList}>{experiences}</div>
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
