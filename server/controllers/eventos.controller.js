const EventosView = require("../views/eventos.view");

const getAll = async (req, res) => {
  try {
    const eventos = await EventosView.getAll();
    return res.status(200).json(eventos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const evento = await EventosView.getById(id);
    if (evento.length === 0)
      return res.status(404).json({ message: "Event not found!" });
    return res.status(200).json(evento);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createEvento = async (req, res) => {
  try {
    const { cidade, estado, evento, tipo, turno, preco } = req.body;
    const eventos = await EventosView.createEvento(
      cidade,
      estado,
      evento,
      tipo,
      turno,
      preco
    );
    return res.status(200).json(eventos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const { cidade, estado, evento, tipo, turno, preco } = req.body;
    const evento = await EventosView.updateEvento(
      cidade,
      estado,
      evento,
      tipo,
      turno,
      preco
    );
    if (evento.length === 0)
      return res.status(404).json({ message: "Event not found!" });
    return res.status(200).json({ message: "Updated event!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const evento = await EventosView.deleteEvento(id);
    if (evento.length === 0)
      return res.status(404).json({ message: "Event not found!" });
    return res.status(200).json({ message: "Deleted event!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getAll, getById, createEvento, updateEvento, deleteEvento };
