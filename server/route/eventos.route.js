const express = require("express");

const EventosController = require("../controllers/eventos.controller");

const router = express.Router();

router.get("/eventos", EventosController.getAll);
router.get("/eventos/:id", EventosController.getById);
router.post("/eventos", EventosController.createEventos);
router.put("/eventos/:id", EventosController.updateEvento);
router.delete("/eventos/:id", EventosController.deleteEvento);

module.exports = router;
