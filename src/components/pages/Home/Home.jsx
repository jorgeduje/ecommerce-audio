import { Typography, Box } from "@mui/material";
import { useParams } from "react-router";
import ProductListContainer from "../ProductsList/ProductListContainer";
import { ButtonCustom } from "../../Custom/CustomComponents";
const Home = () => {
  const { categoryName } = useParams();

  return (
    <div>
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
          padding: "0 10rem",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%", md: "40%" },
            height: "70%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="subtitle1"
            color="primary.third"
            sx={{
              mixBlendMode: "normal",
              opacity: "0.5",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "19px",
              letterSpacing: "10px",
            }}
          >
            NEW PRODUCT
          </Typography>
          <Typography
            variant="h2"
            color="primary.fourth"
            sx={{ textAlign: "start" }}
          >
            XX99 Mark II Headphones
          </Typography>
          <Typography
            paragraph={true}
            color="primary.third"
            sx={{
              textAlign: "start",
              mixBlendMode: "normal",
              opacity: "0.75",
              fontWeight: "500",
              fontSize: "15px",
              lineHeight: "25px",
            }}
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Typography>
          <ButtonCustom variant="contained" sx={{ borderRadius: "0px", padding: "15px 30px",  width: "160px"}}>
            SEE PRODUCT
          </ButtonCustom>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            // height: "60vh",
            width: "90%",
            justifyContent: { xs: "none", md: "flex-end" },
          }}
        >
          <img
            style={{ height: "60vh", objectFit: "contain" }}
            src="https://res.cloudinary.com/dkwjizhdg/image/upload/v1682512392/e-commerce/headsphones_fqjywk.jpg"
            alt="headphones"
          />
        </Box>
      </Box>
      <ProductListContainer categoryName={categoryName}/>
    </div>
  );
};

export default Home;
