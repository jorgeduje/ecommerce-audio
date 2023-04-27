import { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import styles from "./Register.module.css";
import { Box } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/base";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (

    
    <Box className={styles.registerContainer}>
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
            <TextField required id="outlined-required" placeholder="Pepito" />
          </Box>
          <Box className={styles.inputContainer}>
            <label htmlFor="Last Name">Last Name</label>
            <TextField required id="outlined-required" placeholder="Smith" />
          </Box>
        </Grid>
        <Grid item lg={6} className={styles.gridRow}>
          <Box className={styles.inputContainer}>
            <label htmlFor="phone">Phone Number</label>
            <TextField
              required
              id="outlined-required"
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
            <TextField
              required
              id="outlined-required"
              placeholder="pepito@gmail.com"
            />
          </Box>
          <Box className={styles.inputContainer}>
            <label htmlFor="password">Password </label>
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
          </Box>
        </Grid>
        <Grid lg={12}>
          <Button>Send</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
