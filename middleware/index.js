const {
  auth
} = require('./auth.js');

const continueMid = (req, res, next) => next();

module.exports = {
  authMid: auth,
  continueMid
};