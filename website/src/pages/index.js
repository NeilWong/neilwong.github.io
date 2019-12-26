import React from "react"

import Layout from "../components/Layout"
import About from "../components/About"
import Contact from "../components/Contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About
      title="Hello! I'm "
      name="Neil Wong"
      nouns={["developer", "problem solver", "designer"]}
    />
    <Contact />
  </Layout>
)

export default IndexPage
