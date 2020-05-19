import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const CategoryTile = () => {
  //Display category name and background
  return <div></div>
}

export const CategoryGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCraft {
        edges {
          node {
            category
          }
        }
      }
    }
  `)

  const categories = []
  data.allContentfulCraft.edges.forEach(edge => {
    if (!categories.includes(edge.node.category))
      categories.push(edge.node.category)
  })
  console.log(categories)
  return (
    <div>
      {categories.map(category => (
        <div>{category}</div>
      ))}
    </div>
  )
}
export default CategoryGrid
