import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  name: "",
  edad: 2,
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
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
