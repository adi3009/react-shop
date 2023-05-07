import React from 'react';
import './App.css';
import {Product} from "components";
import {CartProvider} from "reducers";
import {CartSidebar} from "components";

function App() {
    return (
        <div className="App">
            <CartProvider>
                <CartSidebar/>
                <Product name="Product 1" price={100}/>
            </CartProvider>
        </div>
    );
}

export default App;
