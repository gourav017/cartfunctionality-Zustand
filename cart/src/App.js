import logo from "./logo.svg";
import "./App.css";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { productdata } from "./Productdata";
import { useState } from "react";
import Counter from "./counter/Counter";
import Todo from "./todolist/todo";
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <ProductList productdata={productdata} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
      <Counter />{" "}
      <Todo/>
    </div>
  );
}

export default App;
