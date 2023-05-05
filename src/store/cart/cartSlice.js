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
    countById: (state, action) => {
      const { id } = action;
      const producto = state.find((p) => p.id === id);
      return producto ? producto.cantidad : 0;
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
  deleteById: (state, action) => {
    const id = action.payload;
    let arrFiltrado = state.cart.filter((item) => item.id !== id);
    state.cart = arrFiltrado;
  },
});

export const { addToCart, clearCart, countById, deleteById, total } =
  cartSlice.actions;

export default cartSlice.reducer;
