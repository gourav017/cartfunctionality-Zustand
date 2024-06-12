const Cart = ({ cart, setCart }) => {
  return (
    <div>
      <h1>cart</h1>
      {cart ? (
        <ul>
          <li>
            {cart.map((p) => (
              <>
                <li>{p.name}</li>
                <button onClick={() => setCart(cart.filter((fp) => fp.id!==p.id))}>
                  remove
                </button>
              </>
            ))}

            <button onClick={() => setCart([])}>clear cart</button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
