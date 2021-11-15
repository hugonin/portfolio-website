import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import "./entry-project.styles.css"

const EntryProject = ({
  title,
  description,
  imageData,
  slug,
  url,
  urlCode,
  tools,
}) => {
  return (
    <div className="main-entry">
      <div>
        <GatsbyImage image={imageData} alt={slug} className="image-entry" />
      </div>
      <div>
        <h2 className="title-entry">{title}</h2>
        <p className="subtitle-entry">{description}</p>
        <p className="tools-entry">
          {" "}
          <span className="tools-title">Development Tools: </span>
          {tools}
        </p>
        <p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="button-entry"
          >
            See Live
          </a>
          <a
            href={urlCode}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            Source Code
          </a>
        </p>
      </div>
    </div>
  )
}

export default EntryProject
