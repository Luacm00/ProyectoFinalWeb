const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const dotenv = require("dotenv");
const userRoutes = require("./routes/usersRoute");
const teamRoutes = require("./routes/teamsRoute");
const matchRoutes = require("./routes/matchesRoute");
//const pool = require("./config/db");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server); 

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado:", socket.id);

  // Escuchar evento personalizado (actualizar marcador)
  socket.on("updateScore", (data) => {
    // Emitir a todos los clientes conectados
    io.emit("scoreUpdated", data);
  });

  // Desconexión del cliente
  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use('/img', express.static("img"));

// Rutas
//de usuarios
app.use("/api/users", userRoutes);

//de equipos
app.use("/api/teams", teamRoutes);

//de partidos
app.use("/api/matches", matchRoutes);

//Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
