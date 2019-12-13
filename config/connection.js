var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123456789",
  database: "burgers_db"
});

db.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

module.exports = db;
