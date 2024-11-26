const pool = require("../config/db");

const Match = {
  // Obtener todos los partidos jugados
  async getPlayedMatches() {
    let conn;
    try {
      conn = await pool.getConnection();
      const query = `
        SELECT * FROM matches WHERE match_date < NOW() ORDER BY match_date DESC
      `;
      const rows = await conn.query(query);
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
      const query = `
        SELECT * FROM matches WHERE match_date >= NOW() ORDER BY match_date ASC
      `;
      const rows = await conn.query(query);
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
      const query = `
        SELECT 
          m.id,
          m.match_date,
          m.score_a,
          m.score_b,
          t1.name AS team_a_name,
          t1.logo AS team_a_logo,
          t2.name AS team_b_name,
          t2.logo AS team_b_logo
        FROM 
          matches m
        JOIN 
          teams t1 ON m.team_a_id = t1.id
        JOIN 
          teams t2 ON m.team_b_id = t2.id
        WHERE 
          m.id = ?
      `;
      const rows = await conn.query(query, [matchId]);
      return rows[0];
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },

  //Obtener resultados con la info de cada equipo en orden cronológico
  async getAllMatchesWithTeams() {
    let conn;
    try {
      conn = await pool.getConnection();
      const query = `
        SELECT 
          m.id,
          m.match_date,
          m.score_a,
          m.score_b,
          t1.name AS team_a_name,
          t1.logo AS team_a_logo,
          t2.name AS team_b_name,
          t2.logo AS team_b_logo
        FROM 
          matches m
        JOIN 
          teams t1 ON m.team_a_id = t1.id
        JOIN 
          teams t2 ON m.team_b_id = t2.id
        ORDER BY 
          m.match_date ASC
      `;
      const rows = await conn.query(query);
      return rows;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },
};

module.exports = Match;
