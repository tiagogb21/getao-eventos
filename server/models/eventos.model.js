const connection = require("./connection");

const getAll = async () => {
  const query = "SELECT * FROM GestaoEventos.eventos";
  const [eventos] = await connection.execute(query);
  return eventos;
};

const getById = async (id) => {
  const query = "SELECT * FROM GestaoEventos.eventos WHERE id=?";
  const [eventos] = await connection.execute(query, [id]);
  return eventos;
};

const createEvento = async (cidade, estado, evento, tipo, turno, preco) => {
  const query =
    "INSERT INTO GestaoEventos.eventos (cidade, estado, evento, tipo, turno, preco) VALUES (?, ?, ?)";
  const [{ insertId: id }] = await connection.execute(query, [
    cidade,
    estado,
    evento,
    tipo,
    turno,
    preco,
  ]);
  return {
    id,
    cidade,
    estado,
    evento,
    tipo,
    turno,
    preco,
  };
};

const updateEvento = async (id, cidade, estado, evento, tipo, turno, preco) => {
  const query =
    "UPDATE GestaoEventos.eventos SET cidade = ?, estado = ?, evento = ?, tipo = ?, turno = ?, preco = ? WHERE id = ?";
  await connection.execute(query, [
    cidade,
    estado,
    evento,
    tipo,
    turno,
    preco,
    id,
  ]);
  return {
    cidade,
    estado,
    evento,
    tipo,
    turno,
    preco,
  };
};

const deleteEvento = async (id) => {
  const query = "DELETE FROM GestaoEventos.eventos WHERE id = ?";
  const delEvento = await connection.execute(query, [id]);
  return delEvento;
};

module.exports = { getAll, getById, createEvento, updateEvento, deleteEvento };
