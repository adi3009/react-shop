import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Product} from "./Product";
import {faker} from "@faker-js/faker";

let product = {
    name: "",
    price: 0
};

beforeEach(() => {
    product = {
        name: faker.lorem.words(5),
        price: parseFloat(faker.commerce.price(5, 500))
    }
});

test("display product name", () => {
    render(<Product name={product.name} price={product.price} />);

    const name = screen.getByRole("heading", {level: 1});

    expect(name).toHaveTextContent(product.name);
});

test("display product price", () => {
    render(<Product name={product.name} price={product.price} />);

    const price = screen.getByTestId("product-price");

    expect(price).toHaveTextContent(`£${product.price}`);
});

test("display quantity", () => {
    render(<Product name={product.name} price={product.price}/>);

    const quantity = screen.queryByDisplayValue("1");

    expect(quantity).toBeInTheDocument();
})