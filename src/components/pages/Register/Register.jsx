import { useState } from "react";
import {
  Grid,
  OutlinedInput,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import styles from "./Register.module.css";
import { Box } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  ButtonCustom,
  CssTextField,
  CssTextFieldPassword,
} from "../../Custom/CustomComponents";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ backgroundColor: "primary.third"}} className={styles.registerContainer}>
      <Grid
        container
        component="form"
        rowSpacing={2}
        className={styles.gridContainer}
      >
        <Typography variant="h1" className={styles.register}>
          REGISTER
        </Typography>
        <Typography variant="h2" className={styles.h2}>
          USER DETAILS
        </Typography>
        <Grid item lg={12} className={styles.gridRow}>
          <Box className={styles.inputContainer}>
            <label htmlFor="name">Name</label>
            <CssTextField
              required
              id="outlined-required 1"
              placeholder="Pepito"
            />
          </Box>
          <Box className={styles.inputContainer}>
            <label htmlFor="Last Name">Last Name</label>
            <CssTextField required id="outlined-required" placeholder="Smith" />
          </Box>
        </Grid>
        <Grid item lg={6} md={12} className={styles.gridRow}>
          <Box className={styles.inputContainer}>
            <label htmlFor="phone">Phone Number</label>
            <CssTextField
              required
              id="outlined-required 2"
              placeholder="333478633"
            />
          </Box>
        </Grid>
        <Typography variant="h2" className={styles.h2}>
          LOGIN DETAILS
        </Typography>
        <Grid item lg={12} className={styles.gridRow}>
          <Box className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <CssTextField
              required
              id="outlined-required 3"
              placeholder="pepito@gmail.com"
            />
          </Box>
        </Grid>
        <Grid  item lg={12} className={styles.gridRow} sx={{marginTop:'1rem'}}>
          <Box className={styles.inputContainer}>
            <label htmlFor="password">Password </label>
            <CssTextFieldPassword>
              <OutlinedInput
                id="outlined-adornment-password 1"
                type={showPassword ? "text" : "password"}
                placeholder="*****"
                required
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
                label="Password"
              />
            </CssTextFieldPassword>
          </Box>

          <Box className={styles.inputContainer}>
            <label htmlFor="confirmPassword">Confirm Password </label>
            <CssTextFieldPassword>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder="*****"
                required
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
                label="Password"
              />
            </CssTextFieldPassword>
          </Box>
        </Grid>
        <Grid item lg={12} >
          <ButtonCustom className={styles.btn}>Send</ButtonCustom>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
