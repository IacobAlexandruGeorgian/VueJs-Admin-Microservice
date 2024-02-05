import { Entity } from "@/interfaces/entity";

export class OrderItem implements Entity {
    id: number;
    product_title: string;
    price: number;
    quanity: number;

    constructor(id: number = 0, product_title: string = '', price: number = 0, quantity: number = 0) {
        this.id = id;
        this.product_title = product_title;
        this.price = price;
        this.quanity = quantity;
    }
}