// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import React from "react";
import {
  CssTextField,
  CssTextFieldPassword,
} from "../../Custom/CustomComponents";
import "./Login.css";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { login } from "../../../store/auth/authSlice";

const Login = () => {
  // const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        // minHeight: "85vh",
        padding: {
          xs: "20px 0px",
          sm: "48px 0px",
          lg: "80px 0px",
        },
        backgroundColor: "primary.third",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "600px",
          },
        }}
      >
        <Button
          className="volverHome"
          sx={{
            textDecoration: "none",
            color: "secondary.third",
            opacity: "0.5",
            marginBottom: "28px",
            backgroundColor: "primary.third",
            outline: "0",
            textAlign: "start",
            border: "0",
            padding: "0",
            display: "flex",
            justifyContent: "flex-start",
            cursor: "pointer",
            transition: "none",
            webkitTransition: "none",
            textTransform: "none",
          }}
        >
          Go Back
        </Button>
      </Box>
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "600px",
          },
          height: "500px",
        }}
      >
        <form className="cajaLogin">
          <Typography
            variant="h1"
            color="secondary.third"
            sx={{
              textTransform: "uppercase",
              width: "100%",
              fontSize: "32px",
              fontFamily: "Manrope",
              fontWeight: "700",
              letterSpacing: "1.14286px",
            }}
          >
            Login
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  marginBottom: "9px",
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "-0.214286px",
                }}
              >
                Email Address
              </Typography>
              <CssTextField type="email" placeholder="alexei@mail.com" />
            </Box>
            <Box
              className="cajaPassLogin"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  marginBottom: "9px",
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "-0.214286px",
                }}
              >
                Password
              </Typography>
              <CssTextFieldPassword>
                <OutlinedInput
                placeholder="2134"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </CssTextFieldPassword>
            </Box>
          </Box>
          <button className="botonLogin">Continue</button>
        </form>
      </Box>
      {/* <Button
        onClick={() =>
          dispatch(login({ email: "juan@gmail.com", dni: 36543412 }))
        }
      >
        Ingresar
      </Button> */}
    </Box>
  );
};

export default Login;
