const express = require('express');

//Proxy builder.
const {
  proxy
} = require('../lib/proxy.js');

//Authentication middleware.
const {
  auth
} = require('../middleware/auth.js');

/**
 * Receive a list of path / target to make register the middlewares.
 * @param {object} {path:'url endpoint',target:'redirect host'}
 * @returns {express.Router}
 */
const bindRoutes = (map) => {

  //Create the router.
  const router = express.Router();

  //Append the middleware route in the express router.
  map.forEach(route => (route && route.auth) ?
    router.use(route.path, auth, proxy(route)) :
    router.use(route.path, proxy(route)));

  return router;

}

module.exports = {
  bindRoutes
};