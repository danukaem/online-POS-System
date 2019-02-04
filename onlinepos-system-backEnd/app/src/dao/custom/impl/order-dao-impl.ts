import Promise = require("promise");
import {PoolConnection} from "mysql";
import {OrderDAO} from "../order-dao";
import {Order} from "../../../entity/order";

export class OrderDAOImpl implements OrderDAO {

    constructor(private connection: PoolConnection) {
    }

    delete(orderid: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM order WHERE orderid='${orderid}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(orderid: string): Promise<Array<Order>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM order WHERE orderid='${orderid}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<Order>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM  order`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    save(entity: Order): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`INSERT INTO order VALUES ('${entity.cusid}','${entity.cusname}','${entity.code}'
              ,'${entity.description}','${entity.qtyonstore}','${entity.unitprice}','${entity.orderqty}','${entity.orderid}','${entity.orderdate}')`,
                (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    update(entity: Order): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`UPDATE order SET cusid = '${entity.cusid}', cusname ='${entity.cusname}', code ='${entity.code}', description ='${entity.description}'
           , qtyonstore ='${entity.qtyonstore}', unitprice ='${entity.unitprice}', orderqty ='${entity.orderqty}', orderdate ='${entity.orderdate}'
             WHERE orderid='${entity.orderid}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });
    }

    count(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.connection.query("SELECT COUNT (*) FROM order", (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]['COUNT (*)']);
                }
            });
        });
    }

}