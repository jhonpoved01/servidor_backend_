const express = require("express");

const router = express.Router();

const controlador = require("../controllers/pqrsController");

// Obtener todas
router.get("/pqrs", controlador.obtenerTodas);

// Obtener una
router.get("/pqrs/:id", controlador.obtenerUna);

// Crear
router.post("/pqrs", controlador.crear);

// Actualizar
router.put("/pqrs/:id", controlador.actualizar);

// Eliminar
router.delete("/pqrs/:id", controlador.eliminar);

module.exports = router;