const connection = require("./connection");

const getAll = async () => {
  const query = "SELECT * FROM GestaoEventos.eventos;";
  const [eventos] = await connection.execute(query);
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

module.exports = { getAll, createEvento };
