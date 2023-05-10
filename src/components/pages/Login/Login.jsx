import {
  ButtonCustom,
  CssTextField,
  CssTextFieldPassword,
  LinkGoBack,
} from "../../Custom/CustomComponents";
import "./Login.css";
import {
  Box,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckoutModalContainer from "../../common/checkoutModal/checkoutModalContainer";
// import { login } from "../../../store/auth/authSlice";

const Login = ({
  showPassword,
  navigate,
  handleClickShowPassword,
  handleMouseDownPassword,
  values,
  handleChange,
  handleSubmit,
  errors,
}) => {
  // const dispatch = useDispatch();
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
          marginBottom: "28px",
        }}
      >
        <LinkGoBack onClick={() => navigate(-1)}>Go Back</LinkGoBack>
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
        <form className="cajaLogin" onSubmit={handleSubmit}>
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
              <CssTextField
                placeholder="alexei@mail.com"
                name="email"
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
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
                  name="password"
                  onChange={handleChange}
                  error={errors.password ? true : false}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff color="primary" />
                        ) : (
                          <Visibility color="primary" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {errors.password && (
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#d32f2f",
                      marginLeft: "14px",
                    }}
                  >
                    {errors.password}
                  </span>
                )}
              </CssTextFieldPassword>
            </Box>
          </Box>
          <ButtonCustom sx={{ width: { xs: "100%", sm: "284px" } }} type="submit">
            Continue
          </ButtonCustom>
        </form>
      </Box>
      {/* <Button
        onClick={() =>
          dispatch(login({ email: "juan@gmail.com", dni: 36543412 }))
        }
      >
        Ingresar
      </Button> */}
      <CheckoutModalContainer/>
    </Box>
  );
};

export default Login;
