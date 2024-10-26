const express = require("express");
const userController = require("../controllers/userController");
const { verifyToken } = require("../middleware/auth");
const router = express.Router();

//registro
router.post("/register", userController.register);

//login
router.post("/login", userController.login);

//obtener perfil de usuario
router.get("/profile", verifyToken, userController.getProfile);

// Ejemplo de ruta protegida
router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "Perfil de usuario", userId: req.userId });
});

module.exports = router;
