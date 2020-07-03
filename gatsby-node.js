// const { isFuture } = require('date-fns');
// const { format } = require('date-fns');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      posts: allCosmicjsPosts(filter: { status: { eq: "published" } }) {
        edges {
          node {
            metadata {
              categories {
                title
                slug
              }
              image {
                url
              }
            }
            title
            published_at(formatString: "DD/MM/YYYY")
            content
            status
            slug
          }
        }
      }
      categories: allCosmicjsCategories {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  result.data.posts.edges.forEach(({ node }, index) => {
    const path = `/blog/${node.slug}`;

    createPage({
      path,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: node.slug,
      },
    });
  });

  // result.data.categories.edges.forEach(({ node }, index) => {
  //   const path = `/category/${node.slug}`;

  //   createPage({
  //     path,
  //     component: require.resolve('./src/templates/category.js'),
  //     context: {
  //       category: node.slug,
  //     },
  //   });
  // });
};

// exports.createPages = async ({ graphql, actions }) => {
//   await createBlogPostPages(graphql, actions);
// };
