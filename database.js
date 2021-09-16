const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "shaikh",
    password: 'knoldus123',
    database: "db_connect"
  });
  con.connect(function(err) {
    if (err) {
        console.log(err);
    }else{
        console.log('connected');
    }
});

module.exports = con;