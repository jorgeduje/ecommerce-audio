import { useDispatch, useSelector } from "react-redux";
import CartModal from "./cartModal";
import { useEffect } from "react";
import {
  clearCart,
  deleteById,
  getTotalItems,
  getTotalPrice,
} from "../../../store/cart/cartSlice";

const CartModalContainer = ({ open, handleClose }) => {
  const { cart, items, total } = useSelector((store) => store.cartSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
    dispatch(getTotalItems());
  }, [cart, dispatch]);
  function eliminarCart(id) {
    dispatch(deleteById(id));
  }
  function eliminarTodosCart() {
    dispatch(clearCart());
  }

  return (
    <CartModal
      cart={cart}
      items={items}
      total={total}
      deleteById={eliminarCart}
      open={open}
      handleClose={handleClose}
      clearCart={eliminarTodosCart}
    />
  );
};

export default CartModalContainer;
