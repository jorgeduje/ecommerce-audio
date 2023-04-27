import { Typography, Button, Box } from "@mui/material";
import "./home.css";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.second",
        backgroundImage: {
          xs: `url(${"https://res.cloudinary.com/dkwjizhdg/image/upload/v1682512392/e-commerce/headsphones_fqjywk.jpg"})`,
          md: "none",
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "80%", md: "40%" },
          display: "flex",
          justifyContent: "center",
          height: "60vh",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="subtitle1"
            color="primary.third"
            className="subtitle1"
          >
            NEW PRODUCT
          </Typography>
          <Typography
            sx={{ typography: { xs: "h4", md: "h2" } }}
            color="primary.fourth"
            className="h2Home"
          >
            XX99 Mark II Headphones
          </Typography>
          <Typography variant="body2" color="primary.third" className="body2">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Typography>
          <Button
            variant="contained"
            sx={{ borderRadius: "0px", marginTop: "20px" }}
            
            className="seeProduct"
          >
            SEE PRODUCT
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "60%",
        }}
      >
        <img
          style={{ height: "60vh", objectFit: "contain" }}
          src="https://res.cloudinary.com/dkwjizhdg/image/upload/v1682512392/e-commerce/headsphones_fqjywk.jpg"
          alt="headphones"
        />
      </Box>
    </Box>
  );
};

export default Home;
