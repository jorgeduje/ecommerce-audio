import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cart, total, items } = useSelector((store) => store.cartSlice);
console.log(cart);
console.log(total);

  return (
    <div>
      <h1>este es el carrito</h1>
      {cart.map((e, index) => (
        <>
        <h1 key={e.id}>{e.name}</h1>
        <h2 key={index*100}>Total={total} Items={items} </h2>
        </>
      ))}
    </div>
  );
};

export default CartContainer;
