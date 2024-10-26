const Team = require("../models/teamModelo");

// Obtener todos los equipos
exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.getAllTeams();
    res.json(teams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener estadísticas de un equipo en un partido
exports.getTeamStats = async (req, res) => {
  const { teamId, matchId } = req.params; // Se asume que se pasan como parámetros en la URL

  try {
    const stats = await Team.getTeamStatsInMatch(teamId, matchId);
    if (!stats) {
      return res.status(404).json({ error: "Estadísticas no encontradas" });
    }
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
