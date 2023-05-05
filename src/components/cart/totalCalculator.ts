import {CartItemInterface} from "../../types/CartItemInterface";

export function calculateCartTotal(items: CartItemInterface[]): number {
    let total = 0;
    items.forEach(item => total = total + (item.quantity * item.price));

    return total;
}