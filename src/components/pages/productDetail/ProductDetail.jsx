import { Box, Typography } from "@mui/material";
import ProductCardContainer from "../../common/productCard/ProductCardContainer";

const ProductDetail = ({ product }) => {
  return (
    <Box sx={{ dispplay: "flex", padding: "165px" }}>
      
        <ProductCardContainer product={product} />
      
      {/* <ProductCardContainer product={product} /> */}
      <Box
        component={"section"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "83px",
        }}
      >
        <Box>
          <Typography variant="h2" sx={{ width: "50%" }}>
            FEATURES
          </Typography>
          <Typography variant="p">{product.features}</Typography>
        </Box>
        <Box>
          <Typography variant="h2">IN THE BOX</Typography>
          {
            product.includes.map((item, index) => (
              <Typography key={index}>{item.item}</Typography>
            ))}
        </Box>
      </Box>
    </Box>
  );
};
export default ProductDetail;
