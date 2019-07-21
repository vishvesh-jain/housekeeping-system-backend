const mysql = require('mysql');

const mysqlconn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'udaandb',
  multipleStatements: true
});

mysqlconn.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('database is connected');
  }
});

module.exports = mysqlconn;
