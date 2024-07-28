import { CartItem } from "src/app/cart-item";
import { LatLng } from "leaflet";
export class Order{
    id!: number;
    items!:CartItem[];
    totalPrice!:number;
    name!:string;
    // addressLatLng?:LatLng;
    paymentId!:string;
    createdAt!:string;
    status!:string
    address!:string

}