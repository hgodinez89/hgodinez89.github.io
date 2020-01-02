/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const languages = require('./src/data/languages');

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-json',
    // This plugin is being inserted as an object
    // because it needs others settings
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        // __dirname returns the complete path of portfolio-site
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "portfolio-site",
        short_name: "portfolio-site",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/imgs/favicon.png",
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      }
    },
  ],
}
