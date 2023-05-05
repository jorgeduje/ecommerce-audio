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
        let newArr = state.cart.map((elemento) => {
          if (elemento.id === action.payload.id) {
            return {
              ...elemento,
              quantity: elemento.quantity + action.payload.quantity,
            };
          } else {
            return elemento;
          }
        });
        state.cart = newArr;
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
   
    getTotalPrice: (state) => {
      let total = state.cart.reduce((acc, elemento) => {
        return acc + (elemento.price * elemento.quantity);
      }, 0);

      state.total = total;
    },
    getTotalItems: (state) => {
      let total = state.cart.reduce((acc, elemento) => {
        return acc + elemento.quantity;
      }, 0);

      state.items = total;
    },
    deleteById: (state, action) => {
      const id = action.payload;
      let arrFiltrado = state.cart.filter((item) => item.id !== id);
      state.cart = arrFiltrado;
    },
  },
});

export const {
  addToCart,
  clearCart,
  deleteById,
  getTotalPrice,
  getTotalItems,
} = cartSlice.actions;

export default cartSlice.reducer;
