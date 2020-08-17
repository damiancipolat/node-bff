const {
  createProxyMiddleware
} = require('http-proxy-middleware');

/**
 * Create a proxy middleware.
 * @param {object} {path:'url endpoint',target:'redirect host'}
 * @returns {createProxyMiddleware}
 */
const proxy = ({ path, target }) => {

  //Create the rewrite rule.
  const pathRewrite = {};
  pathRewrite[path] = '';

  //Set the proxy with the redirection rule.
  return createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite,
    logLevel: 'debug'
  });

};

module.exports = {
  proxy
};