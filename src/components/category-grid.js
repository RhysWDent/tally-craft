import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export const CategoryTile = ({ children, slug }) => {
  //Display category name and background
  return <Link to={`/${slug}`}>{children}</Link>
}

export const CategoryGrid = () => {
  const categories = []
  useStaticQuery(graphql`
    query {
      allContentfulCraft {
        edges {
          node {
            category
          }
        }
      }
    }
  `).allContentfulCraft.edges.forEach(edge => {
    if (!categories.includes(edge.node.category))
      categories.push(edge.node.category)
  })

  console.log(categories)
  return (
    <div>
      {categories.map(category => (
        <CategoryTile slug={category.toLowerCase()}>{category}</CategoryTile>
      ))}
    </div>
  )
}
export default CategoryGrid
