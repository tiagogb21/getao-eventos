const PaymentsView = require('../views/pagamentos.view');

const getAll = async (req, res) => {
  try {
    const payments = await PaymentsView.getAll();
    return res.status(200).json(payments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await PaymentsView.getById(id);
    if (payment.length === 0)
      return res.status(404).json({ message: 'Payment not found!' });
    return res.status(200).json(payment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createPayment = async (req, res) => {
  try {
    const { nome, quantidade, preco } = req.body;
    const payments = await PaymentsView.createPayment(nome, quantidade, preco);
    return res.status(200).json(payments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getAll, getById, createPayment };
