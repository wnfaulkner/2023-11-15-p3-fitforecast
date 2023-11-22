const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// GET /api/users/check-token and ensureloggedin
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// POST /api/users (create a user - signup)
router.post('/', usersCtrl.create);
// GET /api/users
router.post('/login', usersCtrl.login);

router.get('/update-token', usersCtrl.updateToken)
// PATCH 'Update Profile' button on Edit Profile Page
router.put('/profile/edit', usersCtrl.updateLocation)


module.exports = router;