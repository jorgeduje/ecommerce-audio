import { Box, Typography } from "@mui/material";
import { ButtonCustom } from "../../Custom/CustomComponents";
import CartCounter from "../cartCounter/CartCounter";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const CartModal = ({ cart, items, total, deleteById }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: { sm: "200px", xs: "5%" },
        right: { sm: "0px", xs: "50%" },
        transform: {
          lg: "translate(-42%, -17%)",
          sm: "translate(-10%, -17%)",
          xs: "translate(50%, 16%)",
        },
        width: "377px",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "8px",
      }}
    >
      {items > 0 ? (
        <>
          <Box
            sx={{
              display: "flex",
              width: "284px",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "700",
                fontSize: "18px",
              }}
            >{`cart (${items})`}</Typography>
            <Typography>Remove all</Typography>
          </Box>
          <Box
            sx={{
              maxHeight: "240px",
              overflow: "auto",
              margin: "32px 0px 8px 0px",
            }}
          >
            {cart.map((e) => (
              <Box
                key={e.id}
                sx={{
                  display: "flex",
                  width: "284px",
                  height: "64px",
                  marginBottom: "24px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <IconButton
                    onClick={() => deleteById(e.id)}
                    sx={{ width: "64px", height: "64px" }}
                  >
                    <DeleteIcon sx={{ fontSize: "30px" }} />
                  </IconButton>
                  {/* <button onClick={() => deleteById(e.id)}>delete</button> */}
                  <Box>
                    <Typography
                      key={e.id}
                      sx={{
                        fontWeight: "700",
                        fontSize: "15px",
                        lineHeight: "25px",
                      }}
                    >
                      {e.name.split(" ")[0]}
                    </Typography>
                    <Typography
                      key={e.id}
                      sx={{
                        mixBlendMode: "normal",
                        opacity: "0.5",
                        fontWeight: "700",
                        fontSize: "14px",
                        lineHeight: "25px",
                      }}
                    >{`$${e.price}`}</Typography>
                  </Box>
                </Box>

                <CartCounter id={e.id} quantity={e.quantity} />
                {/* <h1 key={e.id}>{e.name}</h1>
                <button onClick={() => deleteById(e.id)}>delete</button>
                <CartCounter id={e.id} quantity={e.quantity} /> */}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "284px",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <Typography>total</Typography>
            <Typography>{`$${total}`}</Typography>
          </Box>
          <ButtonCustom>checkout</ButtonCustom>
        </>
      ) : (
        <Typography>no tenes nada agregado</Typography>
      )}
    </Box>
  );
};

export default CartModal;
