import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "./Suggestions.module.css";
import { ButtonCustom } from "../../Custom/CustomComponents";
import { Link } from "react-router-dom";

const Suggestions = ({ images, name, id }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "100%", height: { xs: "200px", md: "300px" } }}>
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
        <Link to={`/product/${id}`}>
          <ButtonCustom sx={{ width: "160px" }} className={styles.button}>
            SEE PRODUCT
          </ButtonCustom>
          </Link>
      </Box>
    </Box>
  );
};

export default Suggestions;
