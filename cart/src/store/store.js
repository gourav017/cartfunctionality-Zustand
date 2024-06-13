import  {create} from "zustand";

export const cartStore = create((set)=>({
    cart:[],
    addToCart:(products) => set((state)=> ({cart:[...state.cart,products]})),
    removeFromCart:(productId)=>set((state)=>({cart: state.cart.filter((p)=>p.id!==productId)})),
    ClearCart:()=>set({cart:[]})
}))

