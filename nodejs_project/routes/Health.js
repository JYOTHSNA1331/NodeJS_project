const express = require('express')
const healthController = require('../controller/HealthData');
const router = express.Router();

router.get("/health", healthController.HealthData)

module.exports = router;