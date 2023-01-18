const express = require('express')
const bollyController = require('../controller/BollywoodData');
const router = express.Router();

router.get("/bollywood", bollyController.BollyData)

module.exports = router;