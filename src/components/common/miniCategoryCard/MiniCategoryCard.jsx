import Box from "@mui/material/Box";
import styles from './MiniCategoryCard.module.css';
import { Typography } from "@mui/material";

const MiniCategoryCard = ({ images, category }) => {

    return (
        <Box component='div' className={styles.boxImage}>
            <img className={styles.image}  src={images}></img>
            <Typography variant="h5">{category.toUpperCase()}</Typography>
            <Typography variant='body2'>SHOP <span style={{color:'#D87D4A'}}>{">"}</span></Typography>
        </Box>
    )
}

export default MiniCategoryCard