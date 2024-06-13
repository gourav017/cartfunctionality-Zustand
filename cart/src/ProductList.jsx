import { cartStore } from "./store/store";

const ProductList = ({productdata}) => {
  const addToCart = cartStore((state)=>state.addToCart)
  console.log(productdata.electronics)

  return (
    <div>
      {productdata.map((p) => (
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
