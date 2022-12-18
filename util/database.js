const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "labnode",
  password: "av.nt@$*19b$*",
});

module.exports = pool.promise();
