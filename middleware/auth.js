/**
 * Authentication middleware.
 * @param {req} express request
 * @param {res} express response
 * @returns {}
 */
const auth = (req, res, next) => {

  //Just for test.
  const key = '123456';

  //Deny access if the authorization header is not present.
  if (!(req && req.headers && req.headers.authorization))
    return res.status(403).json({});

  //Get the header.
  const auth = req.headers.authorization;

  //Compare authorization header with key.
  if (auth === key)
    next();
  else
    return res.status(403).json({});

};

module.exports = {
  auth
};