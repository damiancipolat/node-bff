const express = require('express');
const router = express.Router();

const {
  notFound
} = require('../middleware/index');

/**
 * Health controller.
 * @param {req} express request
 * @param {res} express response
 * @returns {}
 */
const health = (req, res) => res.status(200).json({ health: "ok" });

//Bind routes with controller.
router.get('/ready', health);
router.get('/live', health);
router.get('/', health);
router.get('*', notFound);

module.exports = router;