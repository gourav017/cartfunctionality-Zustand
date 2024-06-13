import { cartStore } from "./store/store";
const Cart = () => {

   const {cart,removeFromCart,clearthecart} = cartStore((state)=>({
    cart:state.cart,
    addTocart:state.addToCart,
    removeFromCart:state.removeFromCart,
    clearthecart:state.ClearCart
   }))

   console.log(cart);

  return (
    <div>
      <h1>cart</h1>
      {cart ? (
        <ul>
          <li>
            {cart.map((p) => (
              <>
                <li>{p.name}</li>
                <button onClick={()=>removeFromCart(p.id)}>
                  remove
                </button>
              </>
            ))}

            <button onClick={clearthecart}>clear cart</button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
