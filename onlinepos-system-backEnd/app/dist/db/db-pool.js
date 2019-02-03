"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
exports.pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    database: "customers",
    user: "root",
    password: "1234",
    connectionLimit: 10 //this number depends upon the requirment
});
