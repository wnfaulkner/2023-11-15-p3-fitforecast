const express = require('express')
const router = express.Router();
const activityCtrlr = require('../controllers/activityLogs')

// 'Save Activity' button on AddActivityPage
router.post('/addactivity', activityCtrlr.create)

module.exports = router;