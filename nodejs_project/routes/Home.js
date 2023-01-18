const express = require('express');
const router = express.Router();
const homeController = require('../controller/HomeData');

router.get('/', homeController.HomeData);

module.exports = router;