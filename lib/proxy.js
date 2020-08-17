const proxy = require('express-http-proxy');

/**
 * Create a proxy middleware.
 * @param {string} target to redirect.
 * @param {string} endpoint url to replace.
 * @returns {proxy}
 */
const newProxy = (target, endpoint) => {

  return proxy(target, {
    proxyReqPathResolver: (req) => req.originalUrl.replace(endpoint, '')
  });

}

module.exports = {
  newProxy
};