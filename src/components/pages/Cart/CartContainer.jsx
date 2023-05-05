import { useDispatch, useSelector } from "react-redux";
import { deleteById } from "../../../store/cart/cartSlice";

const CartContainer = () => {
  const { cart } = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>este es el carrito</h1>
      {cart.map((e) => (
        <div key={e.id}>
          <h1 key={e.id}>{e.name}</h1>
          <button onClick={() => dispatch(deleteById(e.id))}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default CartContainer;
