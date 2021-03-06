import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/SEO"
import Nav from "../components/Nav"
import Layout from "../components/Layout"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Nav />
      <SEO title={post.frontmatter.title} />
      <div className="max-w-2xl mx-auto p-4 mt-4">
        <h1 className="text-purple-600 font-bold text-4xl">
          {post.frontmatter.title}
        </h1>
        <div
          className="markdown text-gray-800 mt-8 mb-24 text-lg"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
