import { Food } from "./shared/models/food";

export class CartItem {
    constructor(public food:Food){}
    // food!:Food;
    quantity:number = 1;
    price:number = this.food.price
}
