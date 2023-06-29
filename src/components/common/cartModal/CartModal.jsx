import { Box, Modal, Typography } from "@mui/material";
import { ButtonCustom } from "../../Custom/CustomComponents";
import CartCounter from "../cartCounter/CartCounter";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const CartModal = ({
  navigate,
  cart,
  items,
  total,
  deleteById,
  open,
  handleClose,
  clearCart,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: { sm: "200px", xs: "10%" },
          right: { sm: "0px", xs: "50%" },
          transform: {
            lg: "translate(-42%, -17%)",
            sm: "translate(-10%, -17%)",
            xs: "translate(50%, 16%)",
          },
          width: "377px",
          bgcolor: "background.paper",
          border: "none",
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
              <Typography
                onClick={() => clearCart()}
                sx={{
                  textDecorationLine: "underline",
                  mixBlendMode: "normal",
                  opacity: "0.5",
                  cursor: "pointer",
                }}
              >
                Remove all
              </Typography>
            </Box>
            <Box
              sx={{
                maxHeight: "240px",
                overflow: "auto",
                margin: "32px 0px 8px 0px",
                scrollbarWidth: "1px",
                scrollbarColor: "gray gray",
                "&::-webkit-scrollbar": {
                  width: "1px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "gray",
                },
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
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        backgroundImage: `url(${e.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        marginRight: "10px",
                        "&:hover": {
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${e.image})`,
                        },
                      }}
                    >
                      <IconButton
                        onClick={() => deleteById(e.id)}
                        sx={{
                          width: "64px",
                          height: "64px",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "0%",
                          opacity: "0",
                          "&:hover": {
                            opacity: "1",
                          },
                        }}
                      >
                        <DeleteIcon
                          sx={{ fontSize: "30px", color: "primary.main" }}
                        />
                      </IconButton>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "700",
                          fontSize: "15px",
                          lineHeight: "25px",
                        }}
                      >
                        {e.name.split(" ")[0]}
                      </Typography>
                      <Typography
                        sx={{
                          mixBlendMode: "normal",
                          opacity: "0.5",
                          fontWeight: "700",
                          fontSize: "14px",
                          lineHeight: "25px",
                        }}
                      >{`$${e.unit_price}`}</Typography>
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
              <Typography
                sx={{
                  mixBlendMode: "normal",
                  opacity: "0.5",
                  textTransform: "uppercase",
                  fontWeight: "500",
                }}
              >
                total
              </Typography>
              <Typography sx={{ fontWeight: "700" }}>{`$${total}`}</Typography>
            </Box>
            <ButtonCustom onClick={() => {
              handleClose()
              navigate("/checkout") }}>
              checkout
            </ButtonCustom>
          </>
        ) : (
          <Typography>no tenes nada agregado</Typography>
        )}
      </Box>
    </Modal>
  );
};

export default CartModal;
