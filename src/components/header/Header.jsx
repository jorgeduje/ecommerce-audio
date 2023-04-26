import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import {theme} from '../../themeConfig';
import styles from "./Header.module.css";

const menu = ["home", "headphones", "speakers", "earphones"];

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.navBarContainer} position="static">
        <Toolbar className={styles.bar}>
          <img src="src/assets/audio.png" alt="title" className={styles.name} />

          <div className={styles.items}>
            {menu.map((item) => {
              return (
                <Typography
                  key={item}
                  component="p"
                  sx={{ flexGrow: 1 }}
                  className={styles.item}
                >
                  {item}
                </Typography>
              );
            })}
          </div>

          <IconButton
            className={styles.cartIcon}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ padding: "0" }}
          >
            <ShoppingCartOutlinedIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
