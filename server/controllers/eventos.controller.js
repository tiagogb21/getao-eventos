const UserView = require("../views/user.view");

const getAll = async (req, res) => {
  try {
    const users = await UserView.getAll();
    return res.status(200).json(users);
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

module.exports = { getAll, createUser };
