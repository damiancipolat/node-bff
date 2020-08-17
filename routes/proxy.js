const express = require('express');

//Proxy builder.
const {
  newProxy
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

  //For each registered map host.
  map.forEach(route => {

    const {
      target,
      endpoint,
      routes
    } = route;

    //Register the host + path.
    routes.forEach(pathObj => router[pathObj.method](endpoint + pathObj.path, newProxy(target, route.endpoint)));

  });

  return router;
}

module.exports = {
  bindRoutes
};

