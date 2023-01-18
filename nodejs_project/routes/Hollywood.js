const express = require('express')
const hollyController = require('../controller/HollywoodData');
const router = express.Router();

router.get("/hollywood", hollyController.HollyData)

module.exports = router;