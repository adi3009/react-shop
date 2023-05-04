import {fireEvent, render, screen} from "@testing-library/react";
import {AddToCartButton} from "./AddToCartButton";

test ("adds a product to basket in requested quantity", () => {
    const quantity = 5;
    render(<AddToCartButton quantity={quantity}/>);

    const button = screen.getByText("Add To Cart");
    fireEvent.click(button);

    const inCart = screen.queryByText(`${quantity} in Cart`);
    expect(inCart).toBeInTheDocument();
})