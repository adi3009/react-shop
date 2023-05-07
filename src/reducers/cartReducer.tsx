import type {CartItemInterface} from "types";
import {useImmerReducer} from "use-immer";
import React, {createContext, useContext} from "react";

type CartState = {
    items: Array<CartItemInterface>
}

type AddAction = {
    type: "ADD_PRODUCT",
    data: CartItemInterface
}

type DeleteAction = {
    type: "DELETE_PRODUCT",
    data: string
}

type EmptyCartAction = {
    type: "EMPTY_CART"
}

type Action = AddAction | DeleteAction | EmptyCartAction;

const initialState: CartState = {
    items: []
}

export function cartReducer(draft: CartState, action: Action): void {
    switch (action.type) {
        case "ADD_PRODUCT": {
            console.log("adding product " + action.data);
            const item = draft.items.find((i) => i.sku === action.data.sku);
            if (item) {
                item.quantity = item.quantity + action.data.quantity;
            } else {
                draft.items.push(action.data);
            }

            break;
        }

        case "DELETE_PRODUCT": {
            draft.items = draft.items.filter(i => i.sku !== action.data);

            break;
        }

        case "EMPTY_CART": {
            draft.items = [];

            break;
        }
    }
}

export function addProduct(product: CartItemInterface): AddAction {
    return {
        type: "ADD_PRODUCT",
        data: product
    }
}

export function deleteProduct(sku: string): DeleteAction {
    return {
        type: "DELETE_PRODUCT",
        data: sku
    }
}

export function emptyCart(): EmptyCartAction {
    return {
        type: "EMPTY_CART"
    }
}

export const CartContext = createContext<CartState | null>(null);

export const CartDispatchContext = createContext<React.Dispatch<Action> | null>(null);

export function useCart() {
    return useContext(CartContext);
}

export function useCartDispatch() {
    return useContext(CartDispatchContext);
}

export function CartProvider({children}: {children: React.ReactNode}) {
    const [cartState, dispatch] = useImmerReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={cartState}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}