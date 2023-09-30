const mysql = require("mysql");

const dbconn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "monica-manajemen",
  multipleStatements: true,
});

dbconn.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
});

module.exports = dbconn;
