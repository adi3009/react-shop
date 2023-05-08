import {fireEvent, screen} from "@testing-library/react";
import {AddToCartButton} from "./AddToCartButton";
import {getTestProduct, renderWithProvider} from "test-util/testProvider";

test ("adds a product to basket in requested quantity", () => {
    const quantity = 5;
    renderWithProvider(<AddToCartButton product={getTestProduct()} quantity={quantity}/>);

    const button = screen.getByText("Add To Cart");
    fireEvent.click(button);

    const inCart = screen.queryByText(`${quantity} in Cart`);
    expect(inCart).toBeInTheDocument();
});