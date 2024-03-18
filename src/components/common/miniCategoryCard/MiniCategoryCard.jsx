import Box from "@mui/material/Box";
import styles from "./MiniCategoryCard.module.css";
import { Typography } from "@mui/material";
import { ButtonCustom3 } from "../../Custom/CustomComponents";
import { Link } from "react-router-dom";

const MiniCategoryCard = ({ images, title}) => {
  return (
    <Box
      component="div"
      className={styles.boxImage}
      sx={{ width: { xs: "100%", sm: "31%" } }}
    >
      <img className={styles.image} src={images}></img>
      <Typography>{title}</Typography>
      <Link to={`/category/${title}`}>
        <ButtonCustom3 sx={{ marginBottom: "30px", width: "50px" }}>
          SHOP <span style={{ color: "#D87D4A" }}>{">"}</span>
        </ButtonCustom3>
      </Link>
    </Box>
  );
};

export default MiniCategoryCard;
