import React from "react"

import Layout from "../components/layout"
import AboutMe from "../components/AboutMe"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe
      title="Hello! I'm "
      name="Neil Wong"
      content={"I'm a developer from San Francisco"}
      nouns={["developer, problem solver, designer"]}
    />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
