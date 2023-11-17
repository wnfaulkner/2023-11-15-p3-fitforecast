// WEATHER ROUTER

const express = require('express');
const router = express.Router();

weatherCtrl = require('../../controllers/api/weather')

/* GET weather page. */
router.get('/fetch-weather-data', weatherCtrl.index)

module.exports = router;
