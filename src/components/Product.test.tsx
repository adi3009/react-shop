import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {Product} from "./Product";
import {getTestProduct} from "../test-util/testCartProvider";
import {ProductInterface} from "../types";

let product: ProductInterface;

beforeEach(() => {
    product = getTestProduct()
});

test("display a product", () => {
    render(<Product product={product} />);

    const name = screen.getByRole("heading", {level: 1});
    expect(name).toHaveTextContent(product.name);

    const sku = screen.getByRole("heading", {level: 4});
    expect(sku).toHaveTextContent(product.sku);

    const price = screen.getByTestId("product-price");
    expect(price).toHaveTextContent(`£${product.price}`);

    const quantity = screen.queryByDisplayValue("1");
    expect(quantity).toBeInTheDocument();
});

test("display add to cart", () => {
   render(<Product product={product} />);

   const addToCartButton = screen.queryByText("Add To Cart");

   expect(addToCartButton).toBeInTheDocument();
});