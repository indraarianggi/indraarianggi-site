module.exports = {
  siteMetadata: {
    title: "Indra Arianggi",
    description:
      "Personal site by Indra Arianggi S. Contains a profile, work portfolio, and several blog articles about technology, work and hobbies",
    url: "https://www.indraarianggi.com",
    image: "./src/images/indraarianggi.png",
    last_edit: "2019",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/`,
        name: "content",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-images"],
      },
    },
    "gatsby-transformer-yaml",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
