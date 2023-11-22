const express = require('express')
const router = express.Router();
const activityCtrlr = require('../controllers/activityLogs')

// Clicking the 'Save Activity' button on AddActivityPage
router.post('/addactivity', activityCtrlr.create)

// Clicking on activity to go to editactivity page
router.get('/myactivity/:activityId', activityCtrlr.show)

// Clicking the 'Update Activity' button
router.patch('/myactivity/:activityId', activityCtrlr.update)

// Clicking the 'Delete Activity' button
router.delete('/myactivity/:activityId', activityCtrlr.delete);

module.exports = router;