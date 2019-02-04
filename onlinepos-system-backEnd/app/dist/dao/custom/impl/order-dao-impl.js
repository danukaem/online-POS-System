"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var OrderDAOImpl = /** @class */ (function () {
    function OrderDAOImpl(connection) {
        this.connection = connection;
    }
    OrderDAOImpl.prototype.delete = function (orderid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM order WHERE orderid='" + orderid + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDAOImpl.prototype.find = function (orderid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM order WHERE orderid='" + orderid + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM  order", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO order VALUES ('" + entity.cusid + "','" + entity.cusname + "','" + entity.code + "'\n              ,'" + entity.description + "','" + entity.qtyonstore + "','" + entity.unitprice + "','" + entity.orderqty + "','" + entity.orderid + "','" + entity.orderdate + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE order SET cusid = '" + entity.cusid + "', cusname ='" + entity.cusname + "', code ='" + entity.code + "', description ='" + entity.description + "'\n           , qtyonstore ='" + entity.qtyonstore + "', unitprice ='" + entity.unitprice + "', orderqty ='" + entity.orderqty + "', orderdate ='" + entity.orderdate + "'\n             WHERE orderid='" + entity.orderid + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDAOImpl.prototype.count = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT COUNT (*) FROM order", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results[0]['COUNT (*)']);
                }
            });
        });
    };
    return OrderDAOImpl;
}());
exports.OrderDAOImpl = OrderDAOImpl;
