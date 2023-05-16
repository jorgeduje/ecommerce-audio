import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
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

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));

    },

    getTotalPrice: (state) => {
      let total = state.cart.reduce((acc, elemento) => {
        return acc + elemento.price * elemento.quantity;
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
      localStorage.setItem("cart", JSON.stringify(state.cart));

    },
    addOneById: (state, action) => {
      const id = action.payload;

      let newArr = state.cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      });

      state.cart = newArr;
      localStorage.setItem("cart", JSON.stringify(state.cart));

    },
    subOneById: (state, action) => {
      const id = action.payload;

      let newArr = state.cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          return product;
        }
      });

      state.cart = newArr;
      localStorage.setItem("cart", JSON.stringify(state.cart));

    },
  },
});

export const {
  addToCart,
  clearCart,
  deleteById,
  getTotalPrice,
  getTotalItems,
  addOneById,
  subOneById,
} = cartSlice.actions;

export default cartSlice.reducer;
