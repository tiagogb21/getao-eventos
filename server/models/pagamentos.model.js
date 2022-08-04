const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM GestaoEventos.pagamentos';
  const [getPayments] = await connection.execute(query);
  return getPayments;
};

const getById = async (id) => {
  const query = 'SELECT * FROM GestaoEventos.pagamentos WHERE id=?';
  const [getPayment] = await connection.execute(query, [id]);
  return getPayment;
};

const createPayment = async (nome, quantidade, preco) => {
  const query =
    'INSERT INTO GestaoEventos.pagamentos (nome, quantidade, preco) VALUES (?, ?, ?)';
  const [{ insertId: id }] = await connection.execute(query, [nome, quantidade, preco]);
  return {
    id,
    nome,
    quantidade,
    preco
  };
};

module.exports = { getAll, getById, createPayment };
