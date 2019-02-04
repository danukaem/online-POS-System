"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDTO = /** @class */ (function () {
    function OrderDTO(cusid, cusname, code, description, qtyonstore, unitprice, orderqty, orderid, orderdate) {
        this.cusid = cusid;
        this.cusname = cusname;
        this.code = code;
        this.description = description;
        this.qtyonstore = qtyonstore;
        this.unitprice = unitprice;
        this.orderqty = orderqty;
        this.orderid = orderid;
        this.orderdate = orderdate;
    }
    return OrderDTO;
}());
exports.OrderDTO = OrderDTO;
