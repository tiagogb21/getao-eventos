const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM GestaoEventos.users';
  const [users] = await connection.execute(query);
  const user = users.reduce((acc, curr) => {
    const { user_password, ...userWithoutPass } = curr;
    acc.push(userWithoutPass);
    return acc;
  }, []);
  return user;
};

const getById = async (id) => {
  const query = 'SELECT * FROM GestaoEventos.users WHERE id = ?';
  const [users] = await connection.execute(query, [id]);
  return users;
};

const createUser = async (full_name, user_email, user_password) => {
  const users = await getAll();
  const userExists = users.some((user) => user.user_email === user_email);
  if (userExists) return;
  const query =
    'INSERT INTO GestaoEventos.users (full_name, user_email, user_password) VALUES (?, ?, ?)';
  const [{ insertId: id }] = await connection.execute(query, [
    full_name,
    user_email,
    user_password
  ]);
  return {
    id,
    full_name,
    user_email
  };
};

const updateUser = async (id, full_name, user_email, user_password) => {
  const query =
    'UPDATE GestaoEventos.users SET full_name = ?, user_email = ?, user_password = ? WHERE id = ?';
  await connection.execute(query, [full_name, user_email, user_password, id]);
  return {
    id,
    full_name,
    user_email
  };
};

const deleteUser = async (id) => {
  const query = 'DELETE FROM GestaoEventos.users WHERE id = ?';
  const delUser = await connection.execute(query, [id]);
  return delUser;
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
