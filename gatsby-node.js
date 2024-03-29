const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const _ = require("lodash")

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
  const workPage = path.resolve("./src/components/WorkPage/WorkPage.js")
  const tagPage = path.resolve("./src/components/TagPage/TagPage.js")

  const results = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
              tags
            }
          }
        }
      }
    }
  `)

  const blogPosts = results.data.allMarkdownRemark.edges.filter(post => {
    return post.node.frontmatter.category === "blog"
  })

  const workPosts = results.data.allMarkdownRemark.edges.filter(post => {
    return post.node.frontmatter.category === "work"
  })

  const postsPerPage = 6
  const blogNumPages = Math.ceil(blogPosts.length / postsPerPage)
  const workNumPages = Math.ceil(workPosts.length / postsPerPage)

  // Creating blog list with pagination
  Array.from({ length: blogNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/blog" : `/blog/page/${i + 1}`,
      component: blogPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages: blogNumPages,
      },
    })
  })

  // Creating work list with pagination
  Array.from({ length: workNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? "/work" : `/work/page/${i + 1}`,
      component: workPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages: workNumPages,
      },
    })
  })

  // All tags
  let allTags = []
  // Iterate through each post, putting all found tags into `allTags array`
  _.each(results.data.allMarkdownRemark.edges, edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      allTags = allTags.concat(edge.node.frontmatter.tags)
    }
  })

  // Eleminate duplicate tags
  allTags = _.uniq(allTags)

  // Create post list based on a tag
  allTags.forEach((tag, i) => {
    createPage({
      path: `/tag/${_.kebabCase(tag)}`,
      component: tagPage,
      context: {
        tag,
      },
    })
  })

  // Creating blog posts
  results.data.allMarkdownRemark.edges.forEach((post, i) => {
    createPage({
      path: post.node.fields.slug,
      component: postLayout,
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}
