import { Box, Typography } from "@mui/material";
import ProductCardContainer from "../../common/productCard/ProductCardContainer";
import styles from "./ProductDetail.module.css";
import MiniCategoryCardContainer from "./miniCategoryCard/miniCategoryCardContainer";
import SuggestionsContainer from "./suggestions/SuggestionsContainer";
import AlertCartContainer from "../../common/alertCart/AlertCartContainer";

const ProductDetail = ({ product, onAdd, open, handleClose }) => {
  console.log(product);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <AlertCartContainer
        product={product}
        open={open}
        handleClose={handleClose}
      />
      <ProductCardContainer product={product} onAdd={onAdd} show={false} />

      <Box
        component={"section"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          marginTop: "83px",
          gap: "40px",
          border: "2px solid red",
          // padding: "20px",
          width: { xs: "100%", md: "90%" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%" },
            border: "2px solid blue",
            display: "flex",
            flexDirection: { xs: "column" },
          }}
        >
          <Typography variant="h4">FEATURES</Typography>
          <Typography
            variant="body2"
            className={styles.featuresContainer}
            lineHeight="25px"
          >
            {product.features}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "column" },
            border: "2px solid orange",
          }}
        >
          <Typography variant="h4">IN THE BOX</Typography>
          <Box
            sx={{
              width: { xs: "100%" },
              display: "flex",
              flexDirection: "column",
            }}
          >
            {product.includes.map((item, index) => (
              <Typography
                variant="body2"
                className={styles.inTheBoxContainer}
                key={index}
                lineHeight="25px"
              >
                {item.item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        className={styles.galleryContainer}
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: { xs: "column", sm: "initial" },
          border: "solid red",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column" },
            gap: "20px",
            height: "100",
            border: "solid",
          }}
        >
          <img
            src={product.gallery.first.desktop}
            alt="img"
            className={styles.imagenPrueba}
          />
          <img
            src={product.gallery.second.desktop}
            alt="img"
            className={styles.imagenPrueba}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <img
            className={styles.imagenPrueba}
            src={product.gallery.third.desktop}
            alt="img"
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "200px",
          border: "solid green",
        }}
      >
        <SuggestionsContainer
          images={product.categoryImage}
          name={product.name}
        />
        <SuggestionsContainer
          images={product.categoryImage}
          name={product.name}
        />
        <SuggestionsContainer
          images={product.categoryImage}
          name={product.name}
        />
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        gap="30px"
        marginTop="200px"
        width={"100%"}
      >
        <MiniCategoryCardContainer
          images={product.categoryImage}
          category={product.category}
        />
        <MiniCategoryCardContainer
          images={product.categoryImage}
          category={product.category}
        />
        <MiniCategoryCardContainer
          images={product.categoryImage}
          category={product.category}
        />
      </Box>
    </Box>
  );
};
export default ProductDetail;
