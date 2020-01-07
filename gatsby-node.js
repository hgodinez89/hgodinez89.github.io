const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const result = await graphql(`
       {
          allPagJson {
            edges {
              node {
                slug
              }
            }
          }
       }
    `);

    result.data.allPagJson.edges.forEach(element => {
        // This line is the same of const node = element.node;
        const { node } = element;

        actions.createPage({
            path: node.slug,
            component: path.resolve('./src/templates/education.js'),
            context: {
                slug: node.slug
            }
        });
    })   
}