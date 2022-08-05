const UserModel = require('../models/user.model');

const getAll = async () => {
  const users = await UserModel.getAll();
  return users;
};

const getById = async (id) => {
  const user = await UserModel.getById(id);
  return user;
};

const createUser = async (full_name, user_email, user_password) => {
  const users = await UserModel.createUser(full_name, user_email, user_password);
  return users;
};

const updateUser = async (id, full_name, user_email, user_password) => {
  const users = await UserModel.updateUser(id, full_name, user_email, user_password);
  return users;
};

const deleteUser = async (id) => {
  const users = await UserModel.deleteUser(id);
  return users;
};

module.exports = { getAll, createUser, getById, updateUser, deleteUser };
