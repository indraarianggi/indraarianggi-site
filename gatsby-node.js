const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

// Create slug for each content (blog post)
module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const url = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node,
      value: url,
    })
  }
}

// Generate/Create a page for each content (blog post)
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const contentLayout = path.resolve(
    "./src/components/ContentLayout/ContentLayout.js"
  )

  const res = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              category
              date
              tags
            }
            html
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: contentLayout,
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}
