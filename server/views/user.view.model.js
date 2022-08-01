const UserModel = require('../models/user.model');

const getAll = async () => {
  const users = await UserModel.getAll();
  return users;
}

const createUser = async (full_name, user_email, user_password) => {
  const users = await UserModel.createUser(full_name, user_email, user_password);
  return users;
}

module.exports = { getAll, createUser }
