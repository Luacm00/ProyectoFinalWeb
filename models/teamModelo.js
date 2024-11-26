const pool = require("../config/db");

const Team = {
  // Obtener todos los equipos
  async getAllTeams() {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM teams");
      return rows;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },

  // Obtener un equipo por su ID
  async getTeamById(id) {
    let conn;
    try {
      conn = await pool.getConnection();
      const team = await conn.query("SELECT * FROM teams WHERE id = ?", [id]);
      return team[0]; //Retorna el primer resultado
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },

  // Obtener estadísticas de un equipo en un partido
  async getTeamStatsInMatch(teamId, matchId) {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query(
        "SELECT * FROM match_stats WHERE team_id = ? AND match_id = ?",
        [teamId, matchId]
      );
      return rows[0]; // Devuelve las estadísticas del equipo en el partido
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },

  // Obtener los jugadores de un equipo especifico
  async getPlayersByTeamId(teamId) {
    let conn;
    try {
      conn = await pool.getConnection();
      const players = await conn.query(
        "SELECT * FROM players WHERE team_id = ?",
        [teamId]
      );
      return players; //Retorna la lista de jugadores
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },
};

module.exports = Team;
