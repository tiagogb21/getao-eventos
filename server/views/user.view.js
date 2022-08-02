const UserModel = require("../models/user.model");

const getAll = async () => {
  const users = await UserModel.getAll();
  return users;
};

const getById = async () => {
  const user = await UserModel.getById();
  return user;
};

const createUser = async (full_name, user_email, user_password) => {
  const users = await UserModel.createUser(
    full_name,
    user_email,
    user_password
  );
  return users;
};

module.exports = { getAll, createUser, getById, updateUser, deleteUser };
