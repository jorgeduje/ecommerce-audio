import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./ProductCard.module.css";
import { ButtonCustom } from "../../Custom/CustomComponents";
import { useWindowSize } from "../../../utils/useWindowSize";
import { Link } from "react-router-dom";
import ContadorContainer from "../contador/ContadorContainer";

const ProductCard = ({ product, index, show, onAdd }) => {
  const size = useWindowSize();

  let isPair = index % 2 === 0;

  return (
    <>
      <Card
        className={styles.cardContainer}
        key={product.id}
        sx={{
          width: "100%",
          height: "35rem",
          display: "flex",
          flexDirection: isPair ? "row" : "row-reverse",
          boxShadow: "none !important",
          margin: "4rem 0",
        }}
      >
        {/* desktop img */}
        {size.width > 900 && (
          <CardMedia
            className={styles.imgContainer}
            component="img"
            image={product.image}
            alt="img"
          />
        )}
        {/* tablet img */}
        {size.width > 600 && size.width < 900 && (
          <CardMedia
            className={styles.imgContainer}
            component="img"
            image={product.image}
            alt="green iguana"
          />
        )}
        {/* mobile img */}
        {size.width < 600 && (
          <CardMedia
            className={styles.imgContainer}
            component="img"
            image={product.image}
            alt={product.name}
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
            paddingLeft: isPair ? "9rem" : "0",
            paddingRight: isPair ? "0" : "9rem",
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
          {show ? (
            <Link
              to={`/product/${product.id}`}
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
          ) : (
            <>
              <Typography variant="h3">$ {product.price}</Typography>{" "}
              <ContadorContainer onAdd={onAdd} />{" "}
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
