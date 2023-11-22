const express = require('express')
const router = express.Router();
const activityCtrlr = require('../controllers/activityLogs')

// 'Save Activity' button on AddActivityPage
router.post('/addactivity', activityCtrlr.create)

//clicking on activity to go to editactivity page
router.get('/myactivity/:activityId', activityCtrlr.show)

// clicking 'Update Activity'
router.patch('/myactivity/:activityId', activityCtrlr.update)

module.exports = router;