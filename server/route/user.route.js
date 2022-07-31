const express = require('express');

const UserController = require('../controllers/user.controller');

const router = express.Router();

router.get('/users', UserController.getAll);

module.exports = router;