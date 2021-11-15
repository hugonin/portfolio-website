module.exports = {
  siteMetadata: {
    title: `JHDK WebDev Portfolio`,
    description: `A portfolio website built with Gatsby and Strapi to showcase my skills in web development`,
    author: `@JhDoumbe`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jobs`,
        path: `./data/data-jobs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `./data/data-projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `./data/data-services`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `./data/data-about-page`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-json`,
    
    
  ],
}
