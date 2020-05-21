import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Layout } from "./"
export const query = graphql`
  query($category: String!) {
    allContentfulCraft(filter: { category: { eq: $category } }) {
      nodes {
        title
        category
        slug
      }
    }
  }
`

export const Category = ({ pageContext, data }) => {
  const title = pageContext.title
  var crafts = data.allContentfulCraft.nodes
  console.log(data)
  return (
    <Layout>
      <h1>{title}</h1>
      <ul>
        {crafts.map(craft => (
          <li>
            <Link to={`/${craft.slug}`}>{craft.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export default Category
