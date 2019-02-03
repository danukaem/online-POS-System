import Promise = require("promise");
import {PoolConnection} from "mysql";
import {ItemDAO} from "../item-dao";
import {Item} from "../../../entity/item";


export class ItemDAOImpl implements ItemDAO {

    constructor(private connection: PoolConnection) {
    }

    delete(code: string): Promise<boolean> {

        return new Promise((resolve, reject) => {

            this.connection.query(`DELETE FROM Item WHERE code='${code}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }

                });
        });

    }

    find(code: string): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM Item WHERE code='${code}'`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    findAll(): Promise<Array<Item>> {

        return new Promise((resolve, reject) => {

            this.connection.query(`SELECT * FROM Item`,
                (err, results) => {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }

                });
        });

    }

    save(entity: Item): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.connection.query(`INSERT INTO item VALUES ('${entity.code}','${entity.description}','${entity.qtyOnHand}','${entity.unitPrice}')`,
                (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results.affectedRows > 0);
                    }
                });
        });
    }

    update(entity: Item): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.connection.query(`UPDATE item SET description = '${entity.description}', unitprice ='${entity.unitPrice}',qtyOnHand='${entity.qtyOnHand}' WHERE code='${entity.code}'`,
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
            this.connection.query("SELECT COUNT (*) FROM item", (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]['COUNT (*)']);
                }
            });
        });

    }
}

