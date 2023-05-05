import React from 'react';
import './App.css';
import {Product} from "./components/Product";
import {CartProvider} from "./reducers/cartReducer";
import {Sidebar} from "./components/cart/Sidebar";

function App() {
    return (
        <div className="App">
            <CartProvider>
                <Sidebar/>
                <Product name="Product 1" price={100}/>
            </CartProvider>Ï
        </div>
    );
}

export default App;
