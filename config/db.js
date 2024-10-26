const mariadb = require("mariadb");
const dotenv = require("dotenv");

dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_NAME || "inter_soccer",
  port: process.env.DB_PORT || 3306,
  connectionLimit: 5,
  bigIntAsNumber: true,
});

module.exports = pool;
