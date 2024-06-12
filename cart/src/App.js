import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import { productdata } from './Productdata';
import { useState } from 'react';
function App() {
  const [cart,setCart] = useState([]);
  return (
    <div className="App">
      <ProductList productdata={productdata} setCart = {setCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
