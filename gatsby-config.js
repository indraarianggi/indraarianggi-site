module.exports = {
  siteMetadata: {
    site: {
      title: "Indra' Blog",
      icon: "",
      description: "",
      last_edit: "2019",
    },
    author: {
      name: "Indra Arianggi S",
      avatar: "indraarianggi.png",
      email: "indraarianggi@gmail.com",
    },
    link: {
      linkedin: "",
      github: "",
      behance: "",
      instagram: "",
    },
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
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-images"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
