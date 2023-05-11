import { useDispatch } from "react-redux";
import { addOneById, subOneById } from "../../../store/cart/cartSlice";
import { Box, Button, Typography } from "@mui/material";

const CartCounter = ({ id, quantity }) => {
  const dispatch = useDispatch();
  return (
    // <div>
    //   <button onClick={() => dispatch(addOneById(id))}>+</button>
    //   <span>{quantity}</span>
    //   <button onClick={() => dispatch(subOneById(id))}>-</button>
    // </div>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "primary.third",
        width: "96px",
        height: "32px",
        marginRight: "10px",
      }}
    >
      <Button
        onClick={() => dispatch(subOneById(id))}
        disabled={quantity === 1}
        sx={{
          color: "secondary.third",
          opacity: "0.5",
          minWidth: "20px",
          height: "20px",
        }}
      >
        -
      </Button>
      <Typography>{quantity}</Typography>
      <Button
        onClick={() => dispatch(addOneById(id))}
        sx={{
          color: "secondary.third",
          opacity: "0.5",
          minWidth: "20px",
          height: "20px",
        }}
      >
        +
      </Button>
    </Box>
  );
};

export default CartCounter;
