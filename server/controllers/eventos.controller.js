const EventosService = require('../service/eventos.service');

const getAll = async (req, res) => {
  try {
    const eventos = await EventosService.getAll();
    return res.status(200).json(eventos);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const evento = await EventosService.getById(id);
    if (evento.length === 0) return res.status(400).json({ message: 'Event not found!' });
    return res.status(200).json(evento);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const createEvento = async (req, res) => {
  try {
    const { cidade, estado, evento, tipo, turno, preco } = req.body;
    const eventos = await EventosService.createEvento(
      cidade,
      estado,
      evento,
      tipo,
      turno,
      preco
    );
    return res.status(201).json(eventos);
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const updateEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const { cidade, estado, evento, tipo, turno, preco } = req.body;
    const eventoUpdate = await EventosService.updateEvento(
      id,
      cidade,
      estado,
      evento,
      tipo,
      turno,
      preco
    );
    if (eventoUpdate.length === 0)
      return res.status(400).json({ message: 'Event not found!' });
    return res.status(200).json({ message: 'Updated event!' });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

const deleteEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const evento = await EventosService.deleteEvento(id);
    if (evento.length === 0) return res.status(400).json({ message: 'Event not found!' });
    return res.status(200).json({ message: 'Deleted event!' });
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { getAll, getById, createEvento, updateEvento, deleteEvento };
