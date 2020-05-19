import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const GridTile = ({ node }) => {
  return (
    <div>
      <h2>{node.title}</h2>
      <h3>{node.category.replace("-", " ")}</h3>
      <p>{node.description}</p>
    </div>
  )
}

export const CraftGrid = ({ category }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCraft {
        edges {
          node {
            title
            slug
            category
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      {data.allContentfulCraft.edges.map(edge => (
        <GridTile node={edge.node} />
      ))}
    </div>
  )
}
export default CraftGrid
