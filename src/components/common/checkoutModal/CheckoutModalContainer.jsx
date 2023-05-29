import CheckoutModal from "./CheckoutModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutModalContainer = ({
  open,
  handleOpen,
  handleClose,
  grandTotal,
}) => {
  const { cart, items } = useSelector((store) => store.cartSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <CheckoutModal
      cart={cart}
      items={items}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      navigate={navigate}
      dispatch={dispatch}
      grandTotal={grandTotal}
    />
  );
};

export default CheckoutModalContainer;
