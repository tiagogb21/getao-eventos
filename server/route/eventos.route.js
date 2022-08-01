const express = require("express");

const EventosController = require("../controllers/eventos.controller");

const router = express.Router();

router.get("/eventos", EventosController.getAll);
router.post("/eventos", EventosController.createEventos);

module.exports = router;
