const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const craftTemplate = path.resolve("./src/components/craft.js")
  const res = await graphql(`
    query {
      allContentfulCraft {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulCraft.edges.forEach(edge => {
    createPage({
      component: craftTemplate,
      path: `/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
