import React from 'react';
import {screen} from '@testing-library/react';
import App from './App';
import {renderWithProvider} from "test-util/testProvider";

test('renders product list component', async () => {
    renderWithProvider(<App/>);
    const products = await screen.findAllByTestId("product-container");
    expect(products.length).toBe(2);
});

test('renders cart sidebar component', () => {
    renderWithProvider(<App/>);
    const cartHeader = screen.getByText("Cart");
    expect(cartHeader).toBeInTheDocument();
});