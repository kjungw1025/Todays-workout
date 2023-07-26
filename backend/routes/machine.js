const express = require('express');
const { readMachine, readWorkOutWay } = require('../controllers/machine');
const router = express.Router();

// GET /machine/:id
router.get('/:id', readMachine);

// POST /machine/:id
router.post('/:id', readWorkOutWay);

module.exports = router;