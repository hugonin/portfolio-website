import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero/hero.component"
import Services from "../components/my-services/services"
import About from "../components/about/about.component"
import MyProjects from "../components/my-projects/my-projects"
import Contact from "../components/contact/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Services />
    <About />
    <MyProjects />
    <Contact />
  </Layout>
)

export default IndexPage
