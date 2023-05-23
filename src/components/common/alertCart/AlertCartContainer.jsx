
import AlertCart from "./AlertCart";


const AlertCartContainer = ({product, open,  handleClose}) => {

  return (
    <AlertCart
      open={open}
      handleClose={handleClose}
      product={product}
    />
  );
};

export default AlertCartContainer;
