const express = require('express')
const sportsController = require('../controller/SportsData');
const router = express.Router();

router.get("/sports", sportsController.SpData)

module.exports = router;