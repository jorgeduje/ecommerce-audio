import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonCustom = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main, 
    color: "white",
    padding: "10px 20px",
    '&:hover': {
      backgroundColor: "blue"
    }
}));