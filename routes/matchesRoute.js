// routes/matches.js
const express = require("express");
const router = express.Router();
const matchController = require("../controllers/matchController");

// Ruta para obtener todos los partidos jugados
router.get("/played", matchController.getPlayedMatches);

// Ruta para obtener próximos partidos
router.get("/upcoming", matchController.getUpcomingMatches);

// Ruta para obtener el resultado de un partido específico
router.get("/:matchId/result", matchController.getMatchResult);

module.exports = router;
