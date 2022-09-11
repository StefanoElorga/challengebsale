const mysql = require("mysql");
//connect
const connection = mysql.createConnection({
  host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
  user: "bsale_test",
  password: "bsale_test",
  database: "bsale_test",
});

setInterval(function () {
  connection.query("SELECT 1");
}, 2000);

//check connect
connection.connect((error) => {
  if (error) throw error;
  console.log("is connecting");
});

module.exports = connection;
