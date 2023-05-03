import React from 'react';
import './App.css';
import {Product} from "./components/Product";

function App() {
  return (
    <div className="App">
      <Product name="Product 1" price={100}/>
    </div>
  );
}

export default App;
