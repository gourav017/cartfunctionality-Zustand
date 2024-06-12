const ProductList = ({ productdata, setCart }) => {
  return (
    <div>
      {productdata.electronics.map((p) => (
        <ul>
          <li>
            {p.name}
            {p.brand}
            <button onClick={() => setCart((cart)=>[...cart,p])}>add to cart</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
