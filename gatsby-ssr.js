const React = require('react')

exports.onRenderBody = ({setHeadComponents, setPreBodyComponents, setPostBodyComponents}) => {
  setHeadComponents([
    <link key='1' rel="stylesheet" href="https://cdn.jsdelivr.net/npm/britecharts/dist/css/britecharts.min.css" type="text/css" />
  ])
}
