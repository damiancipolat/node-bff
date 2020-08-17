const health = require('./health.js');

const {
  bindRoutes
} = require('./proxy.js');

module.exports = {
  health,
  proxy: bindRoutes
};