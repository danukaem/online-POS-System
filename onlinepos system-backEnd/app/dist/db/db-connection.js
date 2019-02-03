"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
exports.connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "JDBC",
    user: "root",
    password: "mysql"
});
