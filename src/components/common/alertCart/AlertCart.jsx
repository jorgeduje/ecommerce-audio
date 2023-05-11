import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";

const AlertCart = ({ open, handleClick, handleClose, lastElement }) => {
  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Mostrar alerta
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%",display: "flex", alignItems: "center" }} color="warning">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: 2 }}>
                <Typography sx={{ color: "primary.main" }}>Producto agregado correctamente</Typography>
                <Typography sx={{ color: "primary.main" }}>{lastElement.name} x{lastElement.quantity}</Typography>
            </Box>
          </Box>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertCart;
