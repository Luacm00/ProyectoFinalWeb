const express = require("express");
const {verifyToken} = require("../middleware/auth");
const router = express.Router();
const teamController = require("../controllers/teamController");

//Obtener todos los equipos
router.get("/", teamController.getAllTeams);

//Obtener un equipo con sus jugadores
router.get("/:id/players", teamController.getTeamWithPlayers);

module.exports = router;
