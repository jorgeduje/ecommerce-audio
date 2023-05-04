import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cart } = useSelector((store) => store.cartSlice);

  console.log(cart)

  return (
    <div>
      <h1>este es el carrito</h1>
      {cart.map((e) => (
        <h1 key={e.id}>{e.name}</h1>
      ))}
    </div>
  );
};

export default CartContainer;
