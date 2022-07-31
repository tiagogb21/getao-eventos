const UserModel = require('../models/user.model');

const getAll = async () => {
  users = await UserModel.getAll();
  return users;
}

module.exports = { getAll }
