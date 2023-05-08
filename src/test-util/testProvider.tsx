import React, {ReactElement} from "react";
import {useImmerReducer} from "use-immer";
import {CartContext, CartDispatchContext, cartReducer} from "reducers/cartReducer";
import {render, RenderOptions} from "@testing-library/react";
import {CartItemInterface, CartState, ProductInterface} from "types";
import {faker} from "@faker-js/faker";
import {MockedProvider} from "@apollo/client/testing";
import {GET_PRODUCTS_QUERY} from "../components/ProductList";

export const testState: CartState = {
    items: []
}

export const getTestProduct = (): ProductInterface => {
    return {
        name: faker.lorem.words(3),
        sku: faker.lorem.words(1),
        price: parseFloat(faker.commerce.price(10, 100))
    }
}

export const getTestCartItem = (): CartItemInterface => {
    return {
        name: faker.lorem.words(3),
        sku: faker.lorem.words(1),
        quantity: 5,
        price: parseFloat(faker.commerce.price(10, 100))
    }
}

export const addProductToTestCartState = () => {
    testState.items.push(getTestCartItem());
}

export const emptyTestCartState = () => {
    const totalItems = testState.items.length;
    for (let i = totalItems - 1; i >= 0; i--) {
        testState.items.pop();
    }
}

export const mocks = [
    {
        request: {
            query: GET_PRODUCTS_QUERY
        },
        result: {
            data: {
                allProducts: [
                    {
                        "name": "Nantucket Apple Juice",
                        "sku": "01GZW2YXVK05N2HCF9BKQACS6E",
                        "price": 54.05
                    },
                    {
                        "name": "Tart Shells - Sweet, 2",
                        "sku": "01GZW2YXVK0TM9FAZ46RVJGTB2",
                        "price": 112.1
                    }]
            }
        }
    }
];

/**
 * @see - https://testing-library.com/docs/react-testing-library/setup/#custom-render
 * @see - https://redux.js.org/usage/writing-tests
 */
export function TestProvider({children}: { children: React.ReactNode }) {
    const [cartState, dispatch] = useImmerReducer(cartReducer, testState);

    return (
        <MockedProvider mocks={mocks} addTypename={false}>
            <CartContext.Provider value={cartState}>
                <CartDispatchContext.Provider value={dispatch}>
                    {children}
                </CartDispatchContext.Provider>
            </CartContext.Provider>
        </MockedProvider>
    );
}

export const renderWithProvider = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => render(
    ui,
    {
        wrapper: TestProvider,
        ...options
    }
);