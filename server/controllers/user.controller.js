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
    const user = UserView.getById(id);
    if (!user) return res.status(401).json({ message: "User not found!" });
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
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserView.getById(id);
    if (!user) return res.status(401).json({ message: "User not found!" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserView.deleteUser(id);
    if (!user) return res.status(401).json({ message: "User not found!" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getAll, createUser };
