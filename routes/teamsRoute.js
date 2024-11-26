const express = require("express");
const {verifyToken} = require("../middleware/auth");
const router = express.Router();
const teamController = require("../controllers/teamController");

//Obtener todos los equipos
router.get("/", verifyToken, teamController.getAllTeams);

//Obtener estadisticas de un equipo en un partido
router.get('/:teamId/stats/:matchId', teamController.getTeamStats);

//Obtener un equipo con sus jugadores
router.get("/:id/players", teamController.getTeamWithPlayers);

module.exports = router;
