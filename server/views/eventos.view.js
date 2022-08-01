const EventosModel = require("../models/eventos.model");

const getAll = async () => {
  const eventos = await EventosModel.getAll();
  return eventos;
};

const createEvento = async (cidade, estado, evento, tipo, turno, preco) => {
  const eventos = await EventosModel.createUser(
    cidade,
    estado,
    evento,
    tipo,
    turno,
    preco
  );
  return eventos;
};

module.exports = { getAll, createEvento };
