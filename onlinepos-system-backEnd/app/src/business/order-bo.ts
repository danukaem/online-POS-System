import Promise = require("promise");
import {CustomerDTO} from "../dto/customer-dto";
import {pool} from "../db/db-pool";
import {CustomerDAO} from "../dao/custom/customer-dao";
import {DAOTypes, getDAO} from "../dao/dao-factory";
import {OrderDTO} from "../dto/order-dto";
import {OrderDAO} from "../dao/custom/order-dao";

export class OrderBO{
    findAllOrders(): Promise<Array<OrderDTO>>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err){
                    reject(err);
                }else{
                    const orderDAO = <OrderDAO> getDAO(DAOTypes.ORDER, connection);
                    const promise = orderDAO.findAll();
                    promise.then(orders => {
                        resolve(orders);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });
                }
            });
        });
    }
    findOrder(orderid: string): Promise<Array<OrderDTO>>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDAO = <OrderDAO> getDAO(DAOTypes.ORDER, connection);

                    const promise = orderDAO.find(orderid);
                    promise.then(order => {
                        resolve(order);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    saveOrder(order: OrderDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDAO = <OrderDAO> getDAO(DAOTypes.ORDER, connection);

                    const promise = orderDAO.save(order);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    updateOrder(order: OrderDTO): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDAO = <OrderDAO> getDAO(DAOTypes.ORDER, connection);

                    const promise = orderDAO.update(order);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }

    deleteOrder(orderid: string): Promise<boolean>{
        return new Promise((resolve, reject) => {

            pool.getConnection((err, connection) => {

                if (err){
                    reject(err);
                }else{

                    const orderDAO = <OrderDAO> getDAO(DAOTypes.ORDER, connection);

                    const promise = orderDAO.delete(orderid);
                    promise.then(result => {
                        resolve(result);
                        pool.releaseConnection(connection);
                    }).catch(error=>{
                        reject(error);
                        pool.releaseConnection(connection);
                    });

                }

            });


        });
    }
    countOrders():Promise<number>{
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if(err){reject(err);}
                else{
                    const orderDAO =<OrderDAO>getDAO(DAOTypes.ORDER, connection);
                    const promise =orderDAO.count();
                    promise.then(count=>{
                        resolve(count);
                    }).catch(err=>{
                        reject(err);
                    });

                }
            });
        });
    }


}