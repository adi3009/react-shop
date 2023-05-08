import {render, screen, within} from "@testing-library/react";
import {GET_PRODUCTS_QUERY, ProductList} from "./ProductList";
import {renderWithProvider} from "test-util/testProvider";
import {MockedProvider} from "@apollo/client/testing";

test("display a list of products", async () => {
    renderWithProvider(<ProductList/>);

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
    const products = await screen.findAllByTestId("product-container");
    expect(products.length).toBe(2);

    const name = within(products[0]).queryByTestId("product-name");
    expect(name).toBeInTheDocument();

    const sku = within(products[0]).queryByTestId("product-sku");
    expect(sku).toBeInTheDocument();

    const price = within(products[0]).queryByTestId("product-price");
    expect(price).toBeInTheDocument();
});

test("display error", async () => {
    const errorMocks = [
        {
            request: {
                query: GET_PRODUCTS_QUERY
            },
            error: new Error("")
        }
    ];

    render(
        <MockedProvider mocks={errorMocks} addTypename={false}>
            <ProductList />
        </MockedProvider>
    );

    expect(await screen.findByText("Sorry, there is an error.")).toBeInTheDocument();
});