const UserView = require("../views/user.view");

const getAll = async (req, res) => {
  try {
    const users = await UserView.getAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserView.getById(id);
    if (user.length === 0)
      return res.status(404).json({ message: "User not found!" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { full_name, user_email, user_password } = req.body;
    const users = await UserView.createUser(
      full_name,
      user_email,
      user_password
    );
    if (!users) {
      return res.status(404).json({ message: "User already exists!" });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { full_name, user_email, user_password } = req.body;
    const user = await UserView.updateUser(
      id,
      full_name,
      user_email,
      user_password
    );
    if (user.length === 0)
      return res.status(404).json({ message: "User not found!" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserView.deleteUser(id);
    if (user.length === 0)
      return res.status(404).json({ message: "User not found!" });
    return res.status(200).json({ message: "User deleted with success!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
