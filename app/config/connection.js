const mysql = require("mysql");

const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Nicolas2017",
    database: "warehouse_db"
});

connection.connect(function(err){
    if(err){
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;