/**
 * Authentication middleware.
 * @param {req} express request
 * @param {res} express response
 * @returns {}
 */
const auth = (req, res, next) => {
  console.log('1111111111');
  next();
};

module.exports = {
  auth
};