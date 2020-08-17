const express = require('express');

//Proxy builder.
const {
  newProxy
} = require('../lib/proxy.js');

//Authentication middleware.
const {
  authMid,
  continueMid
} = require('../middleware');

/**
 * Create a new router binding the method to the proxy.
 * @param {object} route {path:'url endpoint',target:'redirect host'}
 * @param {object} router express router.
 * @returns {}
 */
const registerRoutes = (route, router) => {

  const {
    target,
    endpoint,
    routes
  } = route;

  //Register the host + path.
  routes.forEach(pathObj => {

    const {
      method,
      path,
      auth
    } = pathObj;

    //Create the middleware, apply authentication is required.
    router[method](endpoint + path, auth ? authMid : continueMid, newProxy(target, endpoint));

  });

}

/**
 * Receive a list of path / target to make register the middlewares.
 * @param {object} {path:'url endpoint',target:'redirect host'}
 * @returns {express.Router}
 */
const bindRoutes = (map) => {

  //Create the router.
  const router = express.Router();

  //For each registered map host.
  map.forEach(route => registerRoutes(route, router));

  return router;

}

module.exports = {
  bindRoutes
};

