import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import {theme} from '../../themeConfig';
import styles from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const menu = ["home", "headphones", "speakers", "earphones"];

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.footerContainer} position="relative">
        <Toolbar className={styles.bar}>
        <img src="src/assets/audio.png" alt="title" className={styles.name}/>
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
        </Toolbar>
        <div className={styles.descriptionIcons}>
          <p className={styles.description}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <section className={styles.icons}>
            <Link to="https://www.facebook.com/" className={styles.social}>
              <FacebookIcon />
            </Link>
            <Link to="https://www.twitter.com/" className={styles.social}>
              <TwitterIcon />
            </Link>
            <Link to="https://www.instagram.com/" className={styles.social}>
              <InstagramIcon />
            </Link>
          </section>
        </div>
        <p className={styles.copyRights}>Copyright 2021. All Rights Reserved</p>
      </AppBar>
    </Box>
  );
};

export default Footer;
