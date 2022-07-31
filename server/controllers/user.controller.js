const UserView = require('../views/user.view.model');

const getAll = async (req, res) => {
  try {
    const users = await UserView.getAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = { getAll }
