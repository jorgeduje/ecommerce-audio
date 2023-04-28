import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import styles from "./ProductCard.module.css";
import { ButtonCustom } from "../../Custom/CustomComponents";
import { useWindowSize } from "../../../hooks/useWindowSize";

const ProductCard = () => {
  const size = useWindowSize();

  return (
    <Card className={styles.cardContainer}>
        {/* desktop img */}
      {(size.width > 900) && (
        <CardMedia
          className={styles.imgContainer}
          component="img"
          image="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637968/audiophileEcommerce/product-xx99-mark-two-headphones/desktop/image-category-page-preview_q5sfc2.jpg"
          alt="green iguana"
        />
      )}
      {/* tablet img */}
      {(size.width > 600 && size.width < 900)&&(
        <CardMedia
          className={styles.imgContainer}
          component="img"
          image="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637970/audiophileEcommerce/product-xx99-mark-two-headphones/tablet/image-category-page-preview_yae4y7.jpg"
          alt="green iguana"
        />
      )}
      {/* mobile img */}
      {(size.width < 600) && (
        <CardMedia
          className={styles.imgContainer}
          component="img"
          image="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637969/audiophileEcommerce/product-xx99-mark-two-headphones/mobile/image-category-page-preview_qmj2jg.jpg"
          alt="green iguana"
        />
      )}
      <CardContent className={styles.infoContainer}>
        <Typography
          variant="p"
          sx={{
            color: "primary.main",
            fontWeight: " 400",
            fontSize: " 14px",
            lineHeight: "19.12px",
            letterSpacing: " 10px",
          }}
        >
          NEW PRODUCT
        </Typography>
        <Typography variant="h1" className={styles.productName}>
          XX99 Mark II Headphones
        </Typography>
        <Typography variant="body2" className={styles.detail}>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </Typography>
        <CardActions sx={{ padding: "0", marginTop: "1rem" }}>
          <ButtonCustom style={{width:'10rem'}}>
            Share
          </ButtonCustom>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
