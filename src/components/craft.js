import React from "react"
import { Link, graphql } from "gatsby"
import { Layout } from "./"
import Category from "./category"

export const query = graphql`
  query($slug: String!) {
    contentfulCraft(slug: { eq: $slug }) {
      title
      category
      images {
        fixed {
          src
        }
      }
    }
  }
`

export const Craft = props => {
  const craft = props.data.contentfulCraft
  console.log(craft)

  return (
    <Layout>
      <h1>{craft.title}</h1>
      {craft.images.map(image => (
        <img src={image.fixed.src} />
      ))}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at
        quia amet aperiam odit debitis, eius quas reprehenderit facilis
        blanditiis asperiores fugit id neque laborum tenetur dolorum cupiditate
        consectetur. Enim atque neque architecto, provident consequuntur
        consequatur dolorum id! Optio voluptatibus debitis amet libero eius?
        Impedit inventore eos consequatur sunt fugit.
      </p>
      <Link to={`/${craft.category.toLowerCase()}`}>
        {craft.category.replace("-", " ")}
      </Link>
    </Layout>
  )
}
export default Craft
