import { Typography, Button, Box } from "@mui/material";
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
      <Box sx={{ width: { xs: "80%", md: "40%" } }}>
        <Typography variant="subtitle1" color="primary.third">
          NEW PRODUCT
        </Typography>
        <Typography variant="h2" color="primary.fourth">
          XX99 Mark II Headphones
        </Typography>
        <Typography paragraph={true} color="primary.third">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Typography>
        <Button variant="contained" sx={{ borderRadius: "0px" }}>
          SEE PRODUCT
        </Button>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          // height: "60vh",
          width: "60%",
        }}
      >
        <img
          style={{  height: "60vh", objectFit: "contain" }}
          src="https://res.cloudinary.com/dkwjizhdg/image/upload/v1682512392/e-commerce/headsphones_fqjywk.jpg"
          alt="headphones"
        />
      </Box>
    </Box>
  );
};

export default Home;
