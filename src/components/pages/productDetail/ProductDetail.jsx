import { Box, Typography } from "@mui/material";
import ProductCardContainer from "../../common/productCard/ProductCardContainer";
import styles from "./ProductDetail.module.css"
import MiniCategoryCardContainer from "./miniCategoryCard/miniCategoryCardContainer";
import SuggestionsContainer from "./suggestions/SuggestionsContainer";


const ProductDetail = ({ product, onAdd }) => {

  console.log(product);

  return (
    <Box sx={{ dispplay: "flex", padding: "165px" }}>
      <ProductCardContainer product={product} onAdd={onAdd} show={false} />

      <Box
        component={"section"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "83px",
          gap: "40px"
        }}
      >
        <Box sx={{ width: "60%" }}>
          <Typography variant="h2" >
            FEATURES
          </Typography>
          <Typography variant="body2" className={styles.featuresContainer} lineHeight="25px">{product.features}</Typography>
        </Box>
        <Box sx={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: ""
        }}
        >
          <Typography variant="h2">IN THE BOX</Typography>
          {product.includes.map((item, index) => (
            <Typography variant="body2" className={styles.inTheBoxContainer} key={index} lineHeight="25px">{item.item}</Typography>
          ))}
        </Box>
      </Box>
      <Box className={styles.galleryContainer}>
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
      </Box>
    </Box>
  );
};
export default ProductDetail;
