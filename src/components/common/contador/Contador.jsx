// import styles from "./Contador.module.css";
import { Box, Typography, Button } from "@mui/material";
import { ButtonCustom } from "../../Custom/CustomComponents";

const Contador = ({ contador, sumar, restar, onAdd }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "primary.third",
          width: "120px",
          height: "48px",
        }}
      >
        <Button
          onClick={restar}
          disabled={contador === 1}
          sx={{
            color: "secondary.third",
            opacity: "0.25",
            minWidth: "20px",
            height: "20px",
          }}
        >
          -
        </Button>
        <Typography>{contador}</Typography>
        <Button
          onClick={sumar}
          sx={{
            color: "secondary.third",
            opacity: "0.25",
            minWidth: "20px",
            height: "20px",
          }}
        >
          +
        </Button>
      </Box>
      
        <Box>
          <ButtonCustom
            onClick={() => onAdd(contador)}
            sx={{
              width: "160px",
            }}
          >
            Add to cart
          </ButtonCustom>
        </Box>
    
    </Box>
  );
};

export default Contador;
