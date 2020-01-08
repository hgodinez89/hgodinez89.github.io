/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const languages = require('./src/data/languages')

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-transformer-json',
    'gatsby-plugin-smoothscroll',
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
        name: 'portfolio-site',
        short_name: 'portfolio-site',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'standalone',
        icon: 'src/imgs/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        // graphQL query to get siteMetadata 
        query: ` 
        { 
          site { 
            siteMetadata { 
              title 
              description 
              url  
              author 
            }
          }
        } 
      `,
        feeds: [
          // an array of feeds, I just have one below
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              const { siteMetadata : { siteUrl } } = site
              return allMarkdownRemark.edges.map(edge => {
                const {node: {frontmatter: {title, date, path, author: { name, email }, featured: { publicURL }, featuredAlt}, excerpt, html}} = edge
                return Object.assign({}, edge.node.frontmatter, {
                  language: `en-us`,
                  title,
                  description: excerpt,
                  date,
                  url: url + path,
                  guid: url + path,
                  author: `${email} ( ${name} )`,
                  image: {
                    url: url + publicURL,
                    title: featuredAlt,
                    link: url + path
                  },
                  custom_elements: [{ 'content:encoded': html }]
                })
              })
            },
            // query to get blog post data 
            query: ` 
            { 
              allMarkdownRemark(  
                sort: { order: DESC, fields: [frontmatter___date] }, 
              ) { 
                edges { 
                  node { 
                    excerpt 
                    html 
                    frontmatter { 
                      path 
                      date 
                      title 
                      featured { publicURL } 
                      featuredAlt 
                      author { 
                        name 
                        email 
                      } 
                    } 
                  } 
                } 
              } 
            } 
          `,
            output: '/rss.xml',
            title: `Hanzel Godinez | RSS Feed`
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-155736344-1'
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [`/admin`, `/tags/links`]
      }
    },
  ],
  siteMetadata: {
    title: 'Hanzel Godinez',
    titleTemplate: 'Hanzel | Software Developer',
    description: "Hanzel's portfolio a software developer",
    url: 'https://hanzelgodinez.dev', // No trailing slash allowed!
    image: '/src/imgs/avatar.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@GodinezHanzel',
    author: 'Hanzel Godinez',
    keywords: 'Software Developer, Desarrollador de Software, Ingeniero en Sistemas, System Engineer',
    socialLinks: {
      twitter: 'https://twitter.com/GodinezHanzel',
      linkedin: 'https://www.linkedin.com/in/hanzel-godinez-hidalgo-795a1418b',
      stackOverflow: 'https://stackexchange.com/users/17473142/hanzel-godinez',
      github: 'https://github.com/hgodinez89',
      pinterest: 'www.pinterest.com/hgodinez89',
      email: 'hgodinez89@hotmail.com',
      phone: '+506 8303-2042'
    }
  }
}
