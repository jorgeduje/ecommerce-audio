import { Typography } from "@mui/material"
import Box from "@mui/material/Box";
import styles from './Suggestions.module.css'
import { ButtonCustom4 } from "../../../Custom/CustomComponents";

const Suggestions = ({images, name}) => {
  return (
    <Box className={styles.container}>
        <Box className={styles.boxImage}>
            <img className={styles.image} src={images.desktop}/>
        </Box>
        <Typography className={styles.name} variant="h5">{name}</Typography>
        <ButtonCustom4 className={styles.button}>SEE PRODUCT</ButtonCustom4>
    </Box>
  )
}

export default Suggestions