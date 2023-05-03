import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import ProductCardContainer from "../../common/productCard/ProductCardContainer"

const ProductDetail = ({ data }) => {

    return (
        <Box sx={{ dispplay: "flex", padding: "165px" }}>
            <ProductCardContainer />
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "83px" }}>
                <Typography variant="h2" sx={{ width: "50%" }}>
                    FEATURES

                    <Typography variant="body1" sx={{ marginTop: "25px" }} >
                        hola
                    </Typography>


                </Typography>
                <Typography variant="h2">
                    IN THE BOX

                </Typography>
            </Box>
        </Box>
    )
}

export default ProductDetail