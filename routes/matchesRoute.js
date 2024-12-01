const express = require("express");
const router = express.Router();
const matchController = require("../controllers/matchController");

// Ruta para obtener todos los partidos jugados
router.get("/played", matchController.getPlayedMatches);

// Ruta para obtener el resultado de un partido específico
router.get("/:matchId/result", matchController.getMatchResult);

// Ruta para obtener los resultados de los partidos ordenados cronológicamente
router.get("/results", matchController.getMatchResults);

module.exports = router;
