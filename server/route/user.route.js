const express = require('express');

const UserController = require('../controllers/user.controller');

const {
  verifyFullName,
  verifyEmail,
  verifyPassword
} = require('../middleware/user.middleware');

const router = express.Router();

router.get('/users', UserController.getAll);

router.get('/users/:id', UserController.getById);

router.post(
  '/users',
  verifyFullName,
  verifyEmail,
  verifyPassword,
  UserController.createUser
);

router.put(
  '/users/:id',
  verifyFullName,
  verifyEmail,
  verifyPassword,
  UserController.updateUser
);

router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
