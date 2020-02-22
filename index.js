import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const content =  {
  'marketing': 'content for marketing',
  'consulting': 'content for consulting'
}

const IndexPage = () => {
  const [business, setBusiness] = useState('marketing')

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi Peter</h1>
      <h1 onClick={() => setBusiness('marketing')}> Marketing </h1>
      <h1 onClick={() => setBusiness('consulting')}> consulting </h1>
      <h1> {content[business]} </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
