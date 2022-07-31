const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM GestaoEventos.users;';
  const [users] = await connection.execute(query)
  return users;
}

module.exports = { getAll };
