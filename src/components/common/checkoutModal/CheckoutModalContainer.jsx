import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutModalContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { cart, items, total } = useSelector((store) => store.cartSlice);
  const navigate = useNavigate();

  return (
    <CheckoutModal
      cart={cart}
      items={items}
      total={total}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      navigate={navigate}
    />
  );
};

export default CheckoutModalContainer;
