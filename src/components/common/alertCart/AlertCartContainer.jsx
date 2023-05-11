import { useState } from "react";
import AlertCart from "./alertCart";
import { useSelector } from "react-redux";


const AlertCartContainer = () => {
    const [open, setOpen] = useState(false);
    const { cart } = useSelector((store) => store.cartSlice);
    const lastElement = cart[cart.length - 1];

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      setOpen(false);
    };
  return <AlertCart open={open} handleClick={handleClick} handleClose={handleClose} lastElement={lastElement}/>;
};

export default AlertCartContainer;
