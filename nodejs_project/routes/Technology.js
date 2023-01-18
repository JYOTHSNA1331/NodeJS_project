const express = require('express')
const techController = require('../controller/TechnologyData');
const router = express.Router();

router.get("/technology", techController.TechData)

module.exports = router;