import { cartStore } from "./store/store";

const ProductList = ({productdata}) => {
  const addToCart = cartStore((state)=>state.addToCart)
  return (
    <div>
      {productdata.electronics.map((p) => (
        <ul>
          <li>
            {p.name}
            {p.brand}
            <button onClick={()=>addToCart(p)}>add to cart</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
