const PaymentModel = require('../models/pagamentos.model');

const getAll = async () => {
  const payments = await PaymentModel.getAll();
  return payments;
};

const getById = async (id) => {
  const payments = await PaymentModel.getById(id);
  return payments;
};

const createPayment = async (nome, quantidade, preco) => {
  const payments = await PaymentModel.createPayment(nome, quantidade, preco);
  return payments;
};

module.exports = { getAll, getById, createPayment };
