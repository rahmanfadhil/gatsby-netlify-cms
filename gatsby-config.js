module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog/`
      }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify"
  ]
};
