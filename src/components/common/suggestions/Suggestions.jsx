import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "./Suggestions.module.css";
import { ButtonCustom } from "../../Custom/CustomComponents";

const Suggestions = ({ images, name }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", height: {xs: "200px", md: "300px"} }}>
        <img
          className={styles.image}
          src={images}
          style={{ width: "100%", justifyContent: "center", height: "100%" }}
        />
      </Box>
      <Typography variant="h5" align="center" my={3}>
        {name}
      </Typography>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <ButtonCustom sx={{ width: "160px" }} className={styles.button}>
          SEE PRODUCT
        </ButtonCustom>
      </Box>
    </Box>
  );
};

export default Suggestions;
