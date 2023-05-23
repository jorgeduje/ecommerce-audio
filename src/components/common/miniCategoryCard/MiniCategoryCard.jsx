import Box from "@mui/material/Box";
import styles from "./MiniCategoryCard.module.css";
import { Typography } from "@mui/material";
import { ButtonCustom3 } from "../../Custom/CustomComponents";

const MiniCategoryCard = ({ images, category, linkearCategoria }) => {
  return (
    <Box
      component="div"
      className={styles.boxImage}
      sx={{ width: { xs: "100%", sm: "31%" } }}
    >
      <img className={styles.image} src={images}></img>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "25px",
          textAlign: "center",
          letterSpacing: "1.28571px",
          textTransform: "uppercase",
        }}
      >
        {category?.toUpperCase()}
      </Typography>
      <ButtonCustom3 sx={{ marginBottom: "30px", width: "50px" }} onClick={linkearCategoria} >
        SHOP <span style={{ color: "#D87D4A" }}>{">"}</span>
      </ButtonCustom3>
    </Box>
  );
};

export default MiniCategoryCard;
