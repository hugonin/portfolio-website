import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage } from "gatsby-plugin-image"

import "./about.styles.css"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              subtitle
              hero_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              hero_image_alt
            }
            id
            body
          }
        }
      }
    }
  `)

  const posts = data.allMdx.edges
  return (
    <>
      {posts.map(({ node: post }) => {
        const title = post.frontmatter.title
        const subtitle = post.frontmatter.subtitle
        const key = post.id
        const body = post.body
        const imageData =
          post.frontmatter.hero_image.childImageSharp.gatsbyImageData
        const imageAlt = post.frontmatter.hero_image_alt
        return (
          <section key={key} className="about-me" id="about" data-nav="About">
            <h2 className="section_title section_title-about">{title}</h2>
            <p className="section_subtitle section_subtitle-about">
              {subtitle}
            </p>
            <div>
              <MDXRenderer>{body}</MDXRenderer>
            </div>

            <GatsbyImage
              image={imageData}
              alt={imageAlt}
              className="about-image"
            />
          </section>
        )
      })}
    </>
  )
}

export default About
