module.exports = {
  siteMetadata: {
    title: 'Jelly Development - Blazing Fast JAMstack Websites',
    description: 'Custom JAMstack website development. High-performance, extremely secure websites for you and your business.',
    defaultTitle: 'Jarod Peachey - Front End Web Developer',
    defaultDescription: 'Custom JAMstack website development. High-performance, extremely secure websites for you and your business.',
    baseUrl: '/',
    author: '@jarod_peachey',
    siteUrl: 'https://jellydevelopment.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: 'jelly-development', // Bucket Slug
        objectTypes: ['posts', 'categories'], // List of the Object Types you want to be able to request from Gatsby.
        apiAccess: {
          read_key: 'vIhcYABflIb3IjpLFVCKbIdGCcKw8a3934CZ1g1CN5IcOtwxka',
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
