import React from 'react';
import './App.css';
import {CartSidebar, ProductList} from "components";
import {CartProvider} from "reducers";

function App() {
    return (
        <div className="App">
            <CartProvider>
                <CartSidebar/>
                <ProductList/>
            </CartProvider>
        </div>
    );
}

export default App;
