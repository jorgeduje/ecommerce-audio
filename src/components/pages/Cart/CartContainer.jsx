import { useDispatch, useSelector } from "react-redux";
import { deleteById, getTotalItems, getTotalPrice} from "../../../store/cart/cartSlice";
import { useEffect } from "react";
import CartCounter from "../../common/cartCounter/CartCounter";


const CartContainer = () => {
  const { cart, items, total } = useSelector((store) => store.cartSlice);

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getTotalPrice())
    dispatch(getTotalItems())
  },[cart, dispatch])

  return (
    <div>
      <h1>este es el carrito</h1>
      {cart.map((e) => (
        <div key={e.id}>
          <h1 key={e.id}>{e.name}</h1>
          <button onClick={() => dispatch(deleteById(e.id))}>delete</button>
          <CartCounter id={e.id} quantity={e.quantity}/>
        </div>
      ))}

      <h2>
        Total={total} Items={items}
      </h2>
    </div>
  );
};

export default CartContainer;
