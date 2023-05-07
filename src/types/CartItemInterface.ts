import {ProductInterface} from "./ProductInterface";

export interface CartItemInterface extends ProductInterface {
    quantity: number;
}