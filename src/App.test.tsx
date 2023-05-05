import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders product component', () => {
    render(<App/>);
    const productName = screen.getByRole("heading", {level: 1});
    expect(productName).toBeInTheDocument();
});

test('renders cart sidebar component', () => {
    render(<App/>);
    const cartHeader = screen.getByText("Cart");
    expect(cartHeader).toBeInTheDocument();
});