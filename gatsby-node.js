const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const categoryTemplate = path.resolve("./src/components/category.js")
  const craftTemplate = path.resolve("./src/components/craft.js")
  const res = await graphql(`
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
  const categories = []
  res.data.allContentfulCraft.edges.forEach(edge => {
    if (!categories.includes(edge.node.category))
      categories.push(edge.node.category)
  })
  console.log("Categories: " + categories)

  categories.forEach(category => {
    createPage({
      component: categoryTemplate,
      path: `/${category.toLowerCase()}`,
      context: {
        category: category,
        title: category.replace("-", " "),
        slug: category.toLowerCase(),
      },
    })
  })

  res.data.allContentfulCraft.edges.forEach(edge => {
    createPage({
      component: craftTemplate,
      path: `/${edge.node.slug}`,
      context: {
        title: edge.node.title,
        slug: edge.node.slug,
      },
    })
  })

  // const categories = []
  // useStaticQuery(graphql`
  //   query {
  //     allContentfulCraft {
  //       edges {
  //         node {
  //           category
  //         }
  //       }
  //     }
  //   }
  // `).allContentfulCraft.edges.forEach(edge => {
  //   if (!categories.includes(edge.node.category))
  //     categories.push(edge.node.category)
  // })
}
