module.exports = {
  siteMetadata: {
    title: "Indra Arianggi",
    description:
      "Personal site by Indra Arianggi S. Contains a profile, work portfolio, and several blog articles about technology, work and hobbies",
    url: "https://www.indraarianggi.com",
    image: "./src/images/indraarianggi.png",
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
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-images"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
