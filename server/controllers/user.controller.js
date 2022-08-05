const UserService = require('../service/user.service');

const getAll = async (req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);
    if (user.length === 0) return res.status(400).json({ message: 'User not found!' });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { full_name, user_email, user_password } = req.body;
    const users = await UserService.createUser(full_name, user_email, user_password);
    if (!users) {
      return res.status(400).json({ message: 'User already exists!' });
    }
    return res.status(201).json(users);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, user_email, user_password } = req.body;
    const user = await UserService.updateUser(id, full_name, user_email, user_password);
    if (user.length === 0) return res.status(400).json({ message: 'User not found!' });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.deleteUser(id);
    if (user.length === 0) return res.status(400).json({ message: 'User not found!' });
    return res.status(200).json({ message: 'User deleted with success!' });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
