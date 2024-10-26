const pool = require("../config/db");

const Match = {
  // Obtener todos los partidos jugados
  async getPlayedMatches() {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query(`
        SELECT m.id, m.match_date, t1.name AS team_a, t2.name AS team_b, m.score_a, m.score_b, m.location
        FROM matches m
        JOIN teams t1 ON m.team_a_id = t1.id
        JOIN teams t2 ON m.team_b_id = t2.id
        WHERE m.match_date < NOW()
        ORDER BY m.match_date DESC
      `);
      return rows;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },

  // Obtener próximos partidos
  async getUpcomingMatches() {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query(`
        SELECT m.id, m.match_date, t1.name AS team_a, t2.name AS team_b, m.location
        FROM matches m
        JOIN teams t1 ON m.team_a_id = t1.id
        JOIN teams t2 ON m.team_b_id = t2.id
        WHERE m.match_date >= NOW()
        ORDER BY m.match_date ASC
      `);
      return rows;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },

  // Obtener resultado de un partido específico
  async getMatchResult(matchId) {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query(
        `
        SELECT m.id, m.match_date, t1.name AS team_a, t2.name AS team_b, m.score_a, m.score_b, m.location
        FROM matches m
        JOIN teams t1 ON m.team_a_id = t1.id
        JOIN teams t2 ON m.team_b_id = t2.id
        WHERE m.id = ?
      `,
        [matchId]
      );
      return rows[0];
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },
};

module.exports = Match;
