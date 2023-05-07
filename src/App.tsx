import React from 'react';
import './App.css';
import {Product} from "components";
import {CartProvider} from "reducers";
import {CartSidebar} from "components";
import {ProductInterface} from "./types";

const product1: ProductInterface = {
    name: "Product 1",
    sku: "p1",
    price: 100
}

function App() {
    return (
        <div className="App">
            <CartProvider>
                <CartSidebar/>
                <Product product={product1}/>
            </CartProvider>
        </div>
    );
}

export default App;
