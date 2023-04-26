import { Grid, TextField, Typography } from "@mui/material";
import styles from "./Register.module.css";
import { Box } from "@mui/system";

const Register = () => {
  return (
    <Box className={styles.registerContainer}>
    <Grid container component="form" className={styles.gridContainer}>
      <Typography variant="h1" className={styles.register}>
        REGISTER
      </Typography>
      <Typography variant="h2" className={styles.h2}>
        USER DETAILS
      </Typography>
      <Grid item className={styles.gridRow}>
        <Box className={styles.inputContainer}>
          <label htmlFor="name">Name</label>
          <TextField required id="outlined-required" placeholder="pepito" />
        </Box>
        <Box className={styles.inputContainer}>
          <label htmlFor="email">Email</label>
          <TextField
            required
            id="outlined-required"
            placeholder="pepito@gmail.com"
          />
        </Box>
      </Grid>
      <Grid item className={styles.gridRow}>
        <Box className={styles.inputContainer}>
          <label htmlFor="phone">Phone Number</label>
          <TextField required id="outlined-required" placeholder="3334786633" />
        </Box>
      </Grid>
      <Typography variant="h2" className={styles.h2}>
        LOCATION DETAILS
      </Typography>
      <Grid item className={styles.gridRow}>
        <Box className={styles.inputContainer}>
          <label htmlFor="address">Address</label>
          <TextField
            required
            id="outlined-required"
            placeholder="1137 williams ave"
          />
        </Box>
      </Grid>
      <Grid item className={styles.gridRow}>
        <Box className={styles.inputContainer}>
          <label htmlFor="zipCode">ZIP Code</label>
          <TextField required id="outlined-required" placeholder="10001" />
        </Box>
        <Box className={styles.inputContainer}>
          <label htmlFor="city">City</label>
          <TextField required id="outlined-required" placeholder="New York" />
        </Box>
      </Grid>
      <Grid item className={styles.gridRow}>
        <Box className={styles.inputContainer}>
          <label htmlFor="country">Country </label>
          <TextField required id="outlined-required" placeholder="3334786633" />
        </Box>
      </Grid>
    </Grid>
    </Box>
  );
};

export default Register;
