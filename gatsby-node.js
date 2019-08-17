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

  const postLayout = path.resolve("./src/components/PostLayout/PostLayout.js")
  const blogPage = path.resolve("./src/components/BlogPage/BlogPage.js")

  const results = await graphql(`
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

  // Creating blog list with pagination
  const postsPerPage = 2
  const numPages = Math.ceil(
    results.data.allMarkdownRemark.edges.length / postsPerPage
  )

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/blog" : `/blog/page/${i + 1}`,
      component: blogPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages,
      },
    })
  })

  // Creating blog posts
  results.data.allMarkdownRemark.edges.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: postLayout,
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}
