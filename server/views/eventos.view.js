const EventosModel = require("../models/eventos.model");

const getAll = async () => {
  const eventos = await EventosModel.getAll();
  return eventos;
};

const getById = async (id) => {
  const eventos = await EventosModel.getById(id);
  return eventos;
};

const createEvento = async (cidade, estado, evento, tipo, turno, preco) => {
  const eventos = await EventosModel.createEvento(
    cidade,
    estado,
    evento,
    tipo,
    turno,
    preco
  );
  return eventos;
};

const updateEvento = async (id, cidade, estado, evento, tipo, turno, preco) => {
  const eventos = await EventosModel.updateEvento(
    cidade,
    estado,
    evento,
    tipo,
    turno,
    preco
  );
  return eventos;
};

const deleteEvento = async (id) => {
  const eventos = await EventosModel.deleteEvento(id);
  return eventos;
};

module.exports = { getAll, getById, createEvento, updateEvento, deleteEvento };
