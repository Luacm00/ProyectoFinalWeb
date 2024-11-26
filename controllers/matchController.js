const Match = require("../models/matchModel");

// Obtener todos los partidos jugados
exports.getPlayedMatches = async (req, res) => {
  try {
    const matches = await Match.getPlayedMatches();
    res.json(matches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener próximos partidos
exports.getUpcomingMatches = async (req, res) => {
  try {
    const matches = await Match.getUpcomingMatches();
    res.json(matches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener resultado de un partido específico
exports.getMatchResult = async (req, res) => {
  const { matchId } = req.params;

  try {
    const match = await Match.getMatchResult(matchId);
    if (!match) {
      return res.status(404).json({ error: "Partido no encontrado" });
    }
    res.json(match);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener resultados de partidos en orden cronológico
exports.getMatchResults = async (req, res) => {
  try {
    const matches = await Match.getAllMatchesWithTeams();
    res.json(matches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
