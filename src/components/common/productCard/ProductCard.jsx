import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./ProductCard.module.css";
import { ButtonCustom } from "../../Custom/CustomComponents";
import { useWindowSize } from "../../../utils/useWindowSize";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const size = useWindowSize();

  let id = product.id;

  function isPair(id) {
    if (id % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      {!isPair(id) ? (
        <Card
          className={styles.cardContainer}
          key={product.id}
          sx={{
            width: "100%",
            height: "35rem",
            display: "flex",
            flexDirection: "row",
            boxShadow: "none !important",
            margin: "4rem 0",
          }}
        >
          {/* desktop img */}
          {size.width > 900 && (
            <CardMedia
              className={styles.imgContainer}
              component="img"
              image={product.image.desktop}
              alt="green iguana"
            />
          )}
          {/* tablet img */}
          {size.width > 600 && size.width < 900 && (
            <CardMedia
              className={styles.imgContainer}
              component="img"
              image={product.image.tablet}
              alt="green iguana"
            />
          )}
          {/* mobile img */}
          {size.width < 600 && (
            <CardMedia
              className={styles.imgContainer}
              component="img"
              image={product.image.mobile}
              alt="green iguana"
            />
          )}
          <CardContent
            className={styles.infoContainer}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              height: " 100%",
              width: "50%",
              paddingLeft: "9rem",
              gap: " 2rem",
            }}
          >
            {/* new product title */}
            {/* <Typography
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
      </Typography>  */}

            <Typography variant="h1" className={styles.productName}>
              {product.name}
            </Typography>
            <Typography variant="body2" className={styles.detail}>
              {product.description}
            </Typography>
            <Link
              to={`product/${product.id}`}
              style={{ padding: "0", marginTop: "1rem" }}
            >
              <ButtonCustom
                style={{
                  width: "10rem",
                  textTransform: "capitalize",
                  textDecoration: "none",
                }}
              >
                See Product
              </ButtonCustom>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <Card
          className={styles.cardContainer}
          key={product.id}
          sx={{
            width: "100%",
            height: "35rem",
            display: "flex",
            flexDirection: "row-reverse",
            boxShadow: "none !important",
            margin: "4rem 0",
          }}
        >
          {/* desktop img */}
          {size.width > 900 && (
            <CardMedia
              className={styles.imgContainer}
              component="img"
              image={product.image.desktop}
              alt="green iguana"
            />
          )}
          {/* tablet img */}
          {size.width > 600 && size.width < 900 && (
            <CardMedia
              className={styles.imgContainer}
              component="img"
              image={product.image.tablet}
              alt="green iguana"
            />
          )}
          {/* mobile img */}
          {size.width < 600 && (
            <CardMedia
              className={styles.imgContainer}
              component="img"
              image={product.image.mobile}
              alt="green iguana"
            />
          )}
          <CardContent className={styles.infoContainer} sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              height: " 100%",
              width: "50%",
              paddingRight: "9rem",
              gap: " 2rem",
            }}>
            {/* new product title */}
            {/* <Typography
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
        </Typography>  */}

            <Typography variant="h1" className={styles.productName}>
              {product.name}
            </Typography>
            <Typography variant="body2" className={styles.detail}>
              {product.description}
            </Typography>
            <Link
              to={`product/${product.id}`}
              style={{ padding: "0", marginTop: "1rem" }}
            >
              <ButtonCustom style={{ width: "10rem",  textTransform: "capitalize" }}>see product</ButtonCustom>
            </Link>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ProductCard;
