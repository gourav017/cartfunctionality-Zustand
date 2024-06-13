import { counterStore } from "./store/counter-store";
import { cartStore } from "./store/store";
const Cart = () => {
  const { cart, removeFromCart, clearthecart, count } = cartStore((state) => ({
    cart: state.cart,
    addTocart: state.addToCart,
    removeFromCart: state.removeFromCart,
    clearthecart: state.ClearCart,
    count: state.count,
  }));

  const { countt, inc, dec } = counterStore((state) => ({
    countt: state.count,
    inc: state.inc,
    dec: state.dec,
  }));
console.log(count);
  return (
    <div>
      <h1>cart</h1>
      {cart ? (
        <ul>
          <li>
            {cart.map((p) => (
              <>
                <li>{p.name}</li>
                <button onClick={() => removeFromCart(p.id)}>remove</button>
                <p>{count}</p>
              </>
            ))}

            <button onClick={clearthecart}>clear cart</button>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>

            <h1>{countt}</h1>

          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
