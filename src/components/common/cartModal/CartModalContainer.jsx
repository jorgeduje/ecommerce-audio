import { useDispatch, useSelector } from "react-redux";
import CartModal from "./cartModal";
import { useEffect } from "react";
import { deleteById, getTotalItems, getTotalPrice } from "../../../store/cart/cartSlice";

const CartModalContainer = () => {
  const { cart, items, total } = useSelector((store) => store.cartSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
    dispatch(getTotalItems());
  }, [cart, dispatch]);
  function eliminarCart(id) {
    dispatch(deleteById(id))
  }

  return <CartModal cart={cart} items={items} total={total} deleteById={eliminarCart}/>;
};

export default CartModalContainer;
