import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import EntryService from "../entry-service/entry-service"

import "./services.styles.css"

const Services = () => {
  const data = useStaticQuery(graphql`
    {
      allServicesJson {
        edges {
          node {
            title
            content
          }
        }
      }
    }
  `)

  const services = data.allServicesJson.edges
  return (
    <div>
      <section className="my-services" id="services" data-nav="Services">
        <h2 className="services-title">What I do</h2>
        <div className="services-section">
          {services.map(({ node: service }) => {
            const title = service.title
            const content = service.content
            return <EntryService title={title} content={content} />
          })}
        </div>

        <AnchorLink className="btn" to="/#projects">
          See My Work
        </AnchorLink>
      </section>
    </div>
  )
}

export default Services
