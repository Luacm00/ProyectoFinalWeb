const express = require("express");
const {verifyToken} = require("../middleware/auth");
const router = express.Router();
const teamController = require("../controllers/teamController");

//obtener todos los equipos
router.get("/", verifyToken, teamController.getAllTeams);

//obtener estadisticas de un equipo en un partido
router.get('/:teamId/stats/:matchId', teamController.getTeamStats);

module.exports = router;
