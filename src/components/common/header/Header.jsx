import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./Header.module.css";
import MenuContainer from "../menu/MenuContainer";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = ({size, navigate, menu}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        className={styles.navBarContainer}
        sx={{
          backgroundColor: "primary.second",
        }}
        position="static"
      >
        <Toolbar className={styles.bar}>
          {size.width < 900 ? (
            <>
              <MenuContainer />
              <img
                src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
                alt="title"
                className={styles.name}
                onClick={() => navigate("/")}
              />
            </>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <IconButton className={styles.menu}>
                <MenuIcon />
              </IconButton>
              <img
                src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
                alt="title"
                className={styles.name}
                onClick={() => navigate("/")}
              />
            </Box>
          )}

          <Box className={styles.items}>
            {menu.map((item) => {
              return (
                <Link
                  key={item.id}
                  sx={{ flexGrow: 1 }}
                  className={styles.item}
                  to={item.path}
                >
                  {item.title}
                </Link>
              );
            })}
          </Box>
          <Box className={styles.usersContainer}>
            <Box className={styles.loginBox}>
              <Link to="/register" className={styles.linkSign}>
                {" "}
                Signin{" "}
              </Link>
              <hr />
              <Link to="/login" className={styles.linkSign}>
                Login
              </Link>
            </Box>
            <IconButton
              className={styles.cartIcon}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ padding: "0" }}
              onClick={() => navigate("/cart")}
            >
              <ShoppingCartOutlinedIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
