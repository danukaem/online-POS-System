export class Order{
    constructor(public cusid: string, public cusname: string, public code: string, public description: string,
                public qtyonstore: string, public unitprice: string, public orderqty: string, public orderid: string
        , public orderdate: string){}
}