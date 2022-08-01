const EventosView = require("../views/eventos.view");

const getAll = async (req, res) => {
  try {
    const eventos = await EventosView.getAll();
    return res.status(200).json(eventos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createEventos = async (req, res) => {
  try {
    const { cidade, estado, evento, tipo, turno, preco } = req.body;
    const eventos = await EventosView.createEventos(
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

module.exports = { getAll, createEventos };
