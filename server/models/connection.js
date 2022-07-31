const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "GestaoEventos",
});

module.exports = connection;
