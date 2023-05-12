import { Typography } from "@mui/material"
import Box from "@mui/material/Box";
import styles from './Suggestions.module.css'
import { ButtonCustom } from "../../Custom/CustomComponents";

const Suggestions = ({images, name}) => {
  return (
    <Box  sx={{ width:"100%", border:"solid"}}>
        <Box className={styles.boxImage} sx={{ width:"100%"}}>
            <img className={styles.image} src={images.desktop} style={{width: "100%", justifyContent:"center"}}/>
        </Box>
        <Typography className={styles.name} variant="h5">{name}</Typography>
        <ButtonCustom sx={{width:'160px'}} className={styles.button}>SEE PRODUCT</ButtonCustom>
    </Box>
  )
}

export default Suggestions