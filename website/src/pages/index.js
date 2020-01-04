import React, { useEffect, useState, useRef } from "react";

import Layout from "../components/Layout";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <About
        title="Hello! I'm "
        name="Neil Wong"
        nouns={["developer", "problem solver", "designer"]}
      />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
