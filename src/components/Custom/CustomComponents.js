import { Button, FormControl, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonCustom = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "blue",
  },
}));

export const CssTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: theme.palette.secondary.third,
      cursor: "pointer",
    },
    "& fieldset": {
      width: "100%",
      border: `2px solid ${theme.palette.primary.third}`,
      borderRadius: "8px",
      padding: "18px 24px",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "-0.25px",
      opacity: "0.4",
      outline: "none",
    },
    "&:hover fieldset": {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    "&.Mui-focused fieldset": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));
export const CssTextFieldPassword = styled(FormControl)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: theme.palette.secondary.third,
      cursor: "pointer",
    },
    "& fieldset": {
      width: "100%",
      border: `2px solid ${theme.palette.primary.third}`,
      borderRadius: "8px",
      padding: "18px 24px",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "19px",
      letterSpacing: "-0.25px",
      opacity: "0.4",
      outline: "none",
    },
    "&:hover fieldset": {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
    "&.Mui-focused fieldset": {
      border: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));