import { Box, Typography } from "@mui/material";
import ProductCardContainer from "../../common/productCard/ProductCardContainer";
import styles from "./ProductDetail.module.css";
import MiniCategoryCardContainer from "./miniCategoryCard/miniCategoryCardContainer";
import SuggestionsContainer from "./suggestions/SuggestionsContainer";

const ProductDetail = ({ product, onAdd }) => {
  console.log(product);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
          padding: "20px",
          width: { xs: "100%", md: "90%" },
        }}
      >
        <Box sx={{ width: { xs: "100%" }, border: "2px solid blue" }}>
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
            alignItems: "center",
            border: "2px solid orange",
          }}
        >
          <Typography variant="h2">IN THE BOX</Typography>
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
      {/* <Box className={styles.galleryContainer}>
        <Box display="flex" flexDirection="column" gap="20px" height="100"  >
          <img src={product.gallery.first.desktop} alt="img" className={styles.imagenPrueba} />
          <img src={product.gallery.second.desktop} alt="img" className={styles.imagenPrueba} />
        </Box>
        <Box >
          <img className={styles.imagenPrueba} src={product.gallery.third.desktop} alt="img" />
        </Box>
      </Box>
      <Box display='flex' gap='30px' marginTop='200px'>
        <SuggestionsContainer images={product.categoryImage} name={product.name}/>
        <SuggestionsContainer images={product.categoryImage} name={product.name}/>
        <SuggestionsContainer images={product.categoryImage} name={product.name}/>
      </Box>
      <Box display='flex' gap='30px' marginTop='200px'>
        <MiniCategoryCardContainer images={product.categoryImage} category={product.category} />
        <MiniCategoryCardContainer images={product.categoryImage} category={product.category} />
        <MiniCategoryCardContainer images={product.categoryImage} category={product.category} />
      </Box> */}
    </Box>
  );
};
export default ProductDetail;
