const express = require('express');
const router = express.Router();

/**
 * Health controller.
 * @param {req} express request
 * @param {res} express response
 * @returns {}
 */
const health = (req, res) => res.status(200).json({ health: "ok" });

/**
 * Not found controller.
 * @param {req} express request
 * @param {res} express response
 * @returns {}
 */
const notFound = (req, res) => res.status(404).json({});

//Bind routes with controller.
router.get('/ready', health);
router.get('/live', health);
router.get('/', health);
router.get('*', notFound);

module.exports = router;