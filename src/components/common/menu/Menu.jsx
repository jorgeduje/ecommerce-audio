import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import styles from './Menu.module.css'
import { Link } from "react-router-dom";

const menu = [
  { id: 1, title: "home", path: "/" },
  { id: 2, title: "headphones", path: "/" },
  { id: 3, title: "speakers", path: "/" },
  { id: 4, title: "earphones", path: "/" },
];

const Menu = ({ state, toggleDrawer}) => {
 
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu.map((text) => (
          <ListItem key={text.id} disablePadding>
            <Link to={text.path} >
              <ListItemText primary={text.title} key={text.id} />
              </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}  className={styles.menu}>
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            className={styles.menuItems}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Menu;
