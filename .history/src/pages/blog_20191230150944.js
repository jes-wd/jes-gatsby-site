import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(post => (
      <div key={ post.node.id }>
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted by { post.node.frontmatter.author }</small>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }    
  }
`

export default BlogPage
