import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0, 
  items: 0, 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let exist = state.cart.some(
        (elemento) => elemento.id === action.payload.id
      );
      if (exist) {
        let newArr = state.cart.map(elemento => {
          if(elemento.id === action.payload.id){
            return {
              ...elemento,
              quantity: elemento.quantity + action.payload.quantity
            }
          }else{
            return elemento
          }
        })
        state.cart = newArr
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    total: (state) => {
      state.total = 0;
      state.items = 0;
        state.cart.forEach(element => {
          state.total += element.quantity * element.price 
          state.items += element.quantity
        });
    }
  },
});
export const { addToCart } = cartSlice.actions;
export const { total } = cartSlice.actions;

export default cartSlice.reducer;
