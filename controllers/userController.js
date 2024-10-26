// controllers/userController.js
const jwt = require("jsonwebtoken");
const User = require('../models/userModelo');
const SECRET_KEY = "tu_clave_secreta"; 

// Registro de usuario
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await User.createUser(username, email, password);
    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Inicio de sesión de usuario
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findUserByEmail(email);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    const isMatch = await User.comparePassword(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.json({ message: "Inicio de sesión exitoso", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener perfil de usuario
exports.getProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const userProfile = await User.getUserProfile(userId);
    if (!userProfile)
      return res.status(404).json({ error: "Perfil no encontrado" });
    res.json(userProfile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
