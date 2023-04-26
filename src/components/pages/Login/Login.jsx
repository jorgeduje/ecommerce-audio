// import { Link } from "react-router-dom";
import "./Login.css";
import { Box, Button } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: "85vh",
        padding: "100px 200px",
        backgroundColor: "primary.third",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "50%" }}>
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
      <Box>
        <form className="cajaLogin">
          <h1>Login</h1>
          <div className="inputsLogin">
            <div className="cajaEmailLogin">
              <label className="loginEmail">Email Address</label>
              <input
                type="email"
                className="emailLogin"
                placeholder="alexei@mail.com"
              />
            </div>
            <div className="cajaPassLogin">
              <label className="loginPassword">Password</label>
              <input
                type="password"
                className="passLogin"
                placeholder="12345"
              />
            </div>
          </div>
          <button className="botonLogin">Continue</button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
