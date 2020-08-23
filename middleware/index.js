const {
  auth
} = require('./auth.js');

/**
 * Not found controller.
 * @param {req} express request
 * @param {res} express response
 * @returns {}
 */
const notFound = (req, res) => res.status(404).json({});

/**
 * Is used to continue a middleware
 * @param {req} express request
 * @param {res} express response
 * @returns {}
 */
const continueMid = (req, res, next) => next();

module.exports = {
  authMid: auth,
  continueMid,
  notFound
};