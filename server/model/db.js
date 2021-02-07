const mysql = require('mysql');

// local mysql db connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dub1t',
  database: 'mydb',
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
});

module.exports = connection;
