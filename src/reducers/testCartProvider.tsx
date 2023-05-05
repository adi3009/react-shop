import React, {ReactElement} from "react";
import {useImmerReducer} from "use-immer";
import {CartContext, CartDispatchContext, cartReducer} from "./cartReducer";
import {render, RenderOptions} from "@testing-library/react";
import {CartState} from "../types/CartState";
import {faker} from "@faker-js/faker";

export const testState: CartState = {
    items: []
}

export const addProductToTestCartState = () => {
    testState.items.push({
        name: faker.lorem.words(3),
        sku: faker.lorem.words(1),
        quantity: 5,
        price: parseFloat(faker.commerce.price(10, 100))
    });
}

export const emptyTestCartState = () => {
    const totalItems = testState.items.length;
    for (let i = totalItems - 1; i >= 0; i--) {
        testState.items.pop();
    }
}

/**
 * @see - https://testing-library.com/docs/react-testing-library/setup/#custom-render
 * @see - https://redux.js.org/usage/writing-tests
 */
export function TestCartProvider({children}: { children: React.ReactNode }) {
    const [cartState, dispatch] = useImmerReducer(cartReducer, testState);

    return (
        <CartContext.Provider value={cartState}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
}

export const renderWithProvider = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => render(
    ui,
    {
        wrapper: TestCartProvider,
        ...options
    }
);