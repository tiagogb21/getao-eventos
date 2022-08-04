const express = require('express');

const PaymentsController = require('../controllers/pagamento.controller');

const router = express.Router();

router.get('/pagamentos', PaymentsController.getAll);
router.get('/pagamentos/:id', PaymentsController.getById);
router.post('/pagamentos', PaymentsController.createPayment);

module.exports = router;
