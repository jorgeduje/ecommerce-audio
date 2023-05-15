import { Box, Typography } from "@mui/material";
import ProductCardContainer from "../../common/productCard/ProductCardContainer";
import styles from "./ProductDetail.module.css";
import AlertCartContainer from "../../common/alertCart/AlertCartContainer";
import SuggestionsContainer from "../../common/suggestions/SuggestionsContainer";
import MiniCategoryCardContainer from "../../common/miniCategoryCard/MiniCategoryCardContainer";

const ProductDetail = ({ product, onAdd, open, handleClose }) => {
  console.log(product);

  return (
    <div className={styles.categoryContainer}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <AlertCartContainer
          product={product}
          open={open}
          handleClose={handleClose}
        />
        <div>
          <ProductCardContainer product={product} onAdd={onAdd} show={false} />
        </div>

        <Box
          component={"section"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            marginTop: "83px",
            gap: "40px",
            // padding: "20px",
            width: { xs: "100%" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              display: "flex",
              flexDirection: { xs: "column" },
            }}
          >
            <Typography variant="h4" mb={2}>
              FEATURES
            </Typography>
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
              width: { xs: "100%", md: "30%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "column" },
              justifyContent: { xs: "space-between", sm: "flex-start" },
            }}
          >
            <Typography
              variant="h4"
              mb={2}
              width={{ xs: "100%", sm: "40%", md: "100%" }}
            >
              IN THE BOX
            </Typography>
            <Box
              sx={{
                width: { xs: "100%", sm: "50%", md: "100%" },
                display: "flex",
                flexDirection: "column",
              }}
            >
              {product.includes.map((item, index) => (
                <Box key={index} sx={{ display: "flex" }}>
                  <Typography mr={"15px"} color={"primary"} fontWeight={"bold"}>
                    {item.quantity}x
                  </Typography>
                  <Typography
                    variant="body2"
                    className={styles.inTheBoxContainer}
                    lineHeight="25px"
                  >
                    {item.item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          className={styles.galleryContainer}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "initial" },
            justifyContent: "space-between",
            // height: "600px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column" },
              gap: "20px",
              height: "100",
              width: { xs: "100%", sm: "40%" },
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
              width: { xs: "100%", sm: "60%" },
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
            marginTop: "50px",
          }}
        >
          <Typography variant="h5" align="center">
            YOU MAY ALSO LIKE
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "50px",
              marginTop: "50px"
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
        </Box>

        <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "50px",
          marginTop: "100px"
        }}
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
    </div>
  );
};
export default ProductDetail;
