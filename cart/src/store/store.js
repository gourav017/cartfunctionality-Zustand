import  {create} from zustand;

export default cartStore = create((set)=>{
    cart:[],
    addToCart:(products) => set((state)=> ({cart:[...state.cart,products]})),
    removeCart:(products)=>set ((state)=>({cart:[]}))
})