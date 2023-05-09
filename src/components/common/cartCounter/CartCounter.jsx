import { useDispatch } from "react-redux";
import { addOneById, subOneById } from "../../../store/cart/cartSlice";

const CartCounter = ({id, quantity}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addOneById(id))}>+</button>
      <span>{quantity}</span>
      <button onClick={() => dispatch(subOneById(id))}>-</button>
    </div>
  );
};

export default CartCounter;
