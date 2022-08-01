const express = require('express');

const UserController = require('../controllers/user.controller');

const router = express.Router();

router.get('/users', UserController.getAll);
router.post('/users', UserController.createUser);

module.exports = router;
