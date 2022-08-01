const connection = require("./connection");

const getAll = async () => {
  const query = "SELECT * FROM GestaoEventos.users";
  const [users] = await connection.execute(query);
  return users;
};

const createUser = async (full_name, user_email, user_password) => {
  const query =
    "INSERT INTO GestaoEventos.users (full_name, user_email, user_password) VALUES (?, ?, ?)";
  const [{ insertId: id }] = await connection.execute(query, [
    full_name,
    user_email,
    user_password,
  ]);
  return {
    id,
    full_name,
    user_email,
    user_password,
  };
};

module.exports = { getAll, createUser };
