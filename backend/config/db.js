const { Pool } = require("pg");

const pool = new Pool({
  user: "abinithigovindaraj",
  host: "localhost",
  database: "weather_app_db",
  password: "Abinithi",
  port: 5432,
});

module.exports = pool;
