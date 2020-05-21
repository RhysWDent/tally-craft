import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export const GridTile = ({ node }) => {
  // console.log(node.slug)
  return (
    <Link to={`/${node.slug}`}>
      <h2>{node.title}</h2>
      <h3>{node.category.replace("-", " ")}</h3>
      <p>{node.description}</p>
    </Link>
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
  return (
    <div>
      {data.allContentfulCraft.edges.map(edge => (
        <GridTile node={edge.node} />
      ))}
    </div>
  )
}
export default CraftGrid
