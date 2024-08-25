"use strict";
/**
 *  == string
 *  == number
 *  == boolean
 *  == undefined
 *  == null
 *  == any
 *
 */
class Product {
    constructor(id, name, price, quantity, cat) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.cat = cat;
    }
    discount(rate) {
        return this.price * rate;
    }
}
