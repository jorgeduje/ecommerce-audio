import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import ProductCardContainer from "../../common/productCard/ProductCardContainer"

const ProductDetail = ({product}) => {

    const {includes} =  product
    console.log(includes);
    return (
        <Box sx={{ dispplay: "flex", padding: "165px" }}>
            <ProductCardContainer product={product}/>
            <Box component={"section"} sx={{ display: "flex", justifyContent: "space-between", marginTop: "83px" }}>
                <Box>
                <Typography variant="h2" sx={{ width: "50%" }}>FEATURES</Typography>
                <Typography variant="p">{product.features}</Typography>
                </Box>
                <Box>
                <Typography variant="h2">IN THE BOX</Typography>
                {includes || includes.map((item, index) => <Typography key={index}>{Object.keys(item)}</Typography>)}
                </Box>
            </Box>
        </Box>
    )
}
export default ProductDetail