import { Box, Modal, Typography } from "@mui/material";
import { ButtonCustom } from "../../Custom/CustomComponents";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { clearCart } from "../../../store/cart/cartSlice";

const CheckoutModal = ({
  cart,
  open,
  handleClose,
  navigate,
  dispatch,
  grandTotal,
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "0%",
            right: "50%",
            transform: "translate(50%, 30%)",
            width: { sm: "540px", xs: "327px" },
            height: { sm: "581px", xs: "600px" },
            bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            borderRadius: "8px",
          }}
        >
          {/* icono */}
          <CheckCircleRoundedIcon
            sx={{ width: "64px", height: "64px", color: "primary.main" }}
          />
          <Box>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: { sm: "32px", xs: "24px" },
                lineHeight: "36px",
              }}
            >
              THANK YOU
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: { sm: "32px", xs: "24px" },
                lineHeight: "36px",
              }}
            >
              FOR YOUR ORDER
            </Typography>
          </Box>
          <Typography
            sx={{
              mixBlendMode: "normal",
              opacity: "0.5",
              fontWeight: "500",
              fontSize: "15px",
              lineHeight: "25px",
            }}
          >
            You will receive an email confirmation shortly.
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: { sm: "140px", xs: "232px" },
              display: "flex",
              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            <Box
              sx={{
                width: { sm: "60%", xs: "100%" },
                borderRadius: { sm: "8px 0px 0px 8px", xs: "8px 8px 0px 0px" },
                backgroundColor: "primary.third",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: cart.length < 1 ? "100%" : "50%",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "15px",
                      lineHeight: "25px",
                    }}
                  >
                    {cart[0]?.name.split(" ")[0]}
                  </Typography>
                  <Typography
                    sx={{
                      mixBlendMode: "normal",
                      opacity: "0.5",
                      fontWeight: "700",
                      fontSize: "14px",
                      lineHeight: "25px",
                    }}
                  >{`$${cart[0]?.unit_price}`}</Typography>
                </Box>
                <Typography
                  sx={{
                    mixBlendMode: "normal",
                    opacity: "0.5",
                    fontWeight: "700",
                  }}
                >{`x${cart[0]?.quantity}`}</Typography>
              </Box>
              {cart.length > 1 && (
                <>
                  <Box
                    sx={{
                      width: "100%",
                      height: "1px",
                      backgroundColor: "secondary.third",
                      opacity: "0.08",
                      margin: "10px 0px 0px 0px",
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      mixBlendMode: "normal",
                      opacity: "0.5",
                      fontWeight: "700",
                      textAlign: "center",
                      fontSize: "12px",
                    }}
                  >
                    and {cart.length - 1} other item(s)
                  </Typography>
                </>
              )}
            </Box>
            <Box
              sx={{
                backgroundColor: "secondary.third",
                width: { sm: "40%", xs: "100%" },
                borderRadius: { sm: "0px 8px 8px 0px", xs: "0px 0px 8px 8px" },
                padding: { sm: "41px 32px", xs: "19px 24px" },
                height: { xs: "92px", sm: "inherit" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "secondary.second",
                  mixBlendMode: "normal",
                  opacity: "0.5",
                }}
              >
                GRAND TOTAL
              </Typography>
              <Typography
                sx={{ fontWeight: "700", color: "secondary.second" }}
              >{`$ ${grandTotal}`}</Typography>
            </Box>
          </Box>
          <ButtonCustom
            sx={{ width: "100%" }}
            onClick={() => {
              dispatch(clearCart());
              navigate("/");
            }}
          >
            BACK TO HOME
          </ButtonCustom>
        </Box>
      </Modal>
    </>
  );
};

export default CheckoutModal;
