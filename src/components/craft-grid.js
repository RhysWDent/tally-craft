import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const CraftGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCraft {
        nodes {
          images {
            fixed {
              src
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <div>
      Craft Grid
      {data.allContentfulCraft.nodes.map(node => {
        return <img src={node.images[0].fixed.src} />
      })}
    </div>
  )
}
export default CraftGrid
