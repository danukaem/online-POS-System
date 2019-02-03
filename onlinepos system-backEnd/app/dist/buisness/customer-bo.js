"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_dao_impl_1 = require("../dao/customer-dao-impl");
var CustomerBo = /** @class */ (function () {
    function CustomerBo() {
    }
    CustomerBo.prototype.findAllCustomers = function () {
        return new customer_dao_impl_1.CustomerDaoImpl().findAllCustomers();
        // return new Promise((resolve, reject) => {
        //
        //     const promise = new CustomerDaoImpl().findAllCustomers();
        //     promise.then(customers=>{
        //         resolve(customers);
        //     }).catch(err=>{
        //         reject(err);
        //     });
        //
        // });
    };
    return CustomerBo;
}());
exports.CustomerBo = CustomerBo;
