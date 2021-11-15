import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import EntryProject from "../entry-project/entry-project"

import "./my-projects.styles.css"

const MyProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url
            description
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            urlCode
            tools
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <div>
      <section className="my-work" id="projects">
        <h2 className="work-title">My work</h2>
        <p className="work-subtitle">A selection of my range of work</p>

        <div>
          {projects.map(({ node: project }) => {
            const title = project.title
            const description = project.description
            const imageData = project.image.childImageSharp.gatsbyImageData
            const slug = project.slug
            const url = project.url
            const urlCode = project.urlCode
            const tools = project.tools
            return (
              <EntryProject
                title={title}
                description={description}
                imageData={imageData}
                slug={slug}
                url={url}
                urlCode={urlCode}
                tools={tools}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default MyProjects
