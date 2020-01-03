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
    {
      resolve: 'gatsby-plugin-scroll-reveal',
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%' // Corresponds to root's bounding box margin
      }
    },
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
