import React from "react"

import Layout from "../components/layout"
import AboutMe from "../components/AboutMe"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe
      title="Hello! I'm "
      name="Neil Wong"
      nouns={["developer", "problem solver", "designer"]}
    />
  </Layout>
)

export default IndexPage
