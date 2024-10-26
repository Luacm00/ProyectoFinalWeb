const pool = require("../config/db");
const bcrypt = require("bcryptjs");

const User = {
  // Crear un nuevo usuario (registro)
  async createUser(username, email, password) {
    let conn;
    try {
      conn = await pool.getConnection();
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await conn.query(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, hashedPassword]
      );
      return result;
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },

  // Encontrar un usuario por correo electrónico (inicio de sesión)
  async findUserByEmail(email) {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM users WHERE email = ?", [
        email,
      ]);
      return rows[0]; // Devuelve el primer usuario encontrado
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },

  // Comparar la contraseña ingresada con la contraseña almacenada
  async comparePassword(inputPassword, hashedPassword) {
    const match = await bcrypt.compare(inputPassword, hashedPassword);
    return match;
  },

  // Obtener perfil del usuario por ID
  async getUserProfile(userId) {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query(
        "SELECT id, username AS name, email FROM users WHERE id = ?",
        [userId]
      );
      return rows[0]; // Regresar el primer usuario encontrado
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },

  // Obtener todos los usuarios
  async getAllUsers() {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM users");
      return rows; // Devuelve todos los usuarios
    } catch (err) {
      throw err;
    } finally {
      if (conn) conn.release();
    }
  },
};

module.exports = User;
