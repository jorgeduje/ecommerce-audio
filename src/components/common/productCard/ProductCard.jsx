import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ButtonCustom } from "../../Custom/CustomComponents";
// import { useWindowSize } from "../../../utils/useWindowSize";
import { Link } from "react-router-dom";
import ContadorContainer from "../contador/ContadorContainer";
import { Box } from "@mui/material";

const ProductCard = ({ product, index, show, onAdd }) => {
  // const size = useWindowSize();

  let isPair = index % 2 === 0;

  return (
    <>
      <Card
        key={product.id}
        sx={{
          width: "100%",
          display: "flex",
          paddingLeft: show
            ? { lg: "10rem", md: "7.5rem", xs: "1.5rem" }
            : { lg: "10rem", md: "2.5rem", xs: "1.5rem" },
          paddingRight: show
            ? { lg: "10rem", md: "7.5rem", xs: "1.5rem" }
            : { lg: "10rem", md: "2.5rem", xs: "1.5rem" },
          paddingTop: show
            ? { lg: "10rem", xs: "7.5rem" }
            : { md: "3rem", xs: "1.5rem" },
          flexDirection: show
            ? { md: isPair ? "row" : "row-reverse", xs: "column" }
            : { sm: "row", xs: "column" },
          boxShadow: "none",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: show
              ? { lg: "560px", md: "530px", xs: "352px" }
              : { lg: "560px", md: "530px", sm: "480px", xs: "352px" },
            width: show
              ? { lg: "47.5%", md: "42.5%", xs: "100%" }
              : { lg: "47.5%", md: "42.5%", sm: "35%", xs: "100%" },
            backgroundImage: `url(${product.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "8px",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box
          sx={{
            height: show
              ? { md: "343px", sm: "302px", xs: "300px" }
              : { md: "343px", sm: "380px", xs: "360px" },
            width: show
              ? { lg: "445px", md: "343px", sm: "572px", xs: "100%" }
              : { lg: "445px", md: "443px", sm: "60%", xs: "100%" },
            display: "flex",
            marginTop: show
              ? { md: "0px", xs: "52px" }
              : { sm: "0px", xs: "52px" },
            flexDirection: "column",
            alignItems: show ? { md: "start", xs: "center" } : { xs: "start" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: { sm: "40px", xs: "28px" },
              lineHeight: "44px",
              letterSpacing: "1.42857px",
              textTransform: "uppercase",
              textAlign: { md: "start", xs: "center" } ,
            }}
          >
            {product.title}
          </Typography>
          <Typography
            sx={{
              textAlign: { md: "start", xs: "center" } ,
              fontWeight: "500",
              fontSize: "15px",
              lineHeight: "25px",
              opacity: "0.5",
            }}
          >
            {product.description}
          </Typography>
          {show ? (
            <Link
              to={`/product/${product.id}`}
              style={{ padding: "0", marginTop: "1rem" }}
            >
              <ButtonCustom
                style={{
                  width: "10rem",
                  textDecoration: "none",
                }}
              >
                See Product
              </ButtonCustom>
            </Link>
          ) : (
            <>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  lineHeight: "25px",
                  textTransform: "uppercase",
                  width: "100%",
                  textAlign: { xs: "start" },
                }}
              >
                $ {product.price}
              </Typography>{" "}
              <ContadorContainer onAdd={onAdd} />{" "}
            </>
          )}
        </Box>
      </Card>
    </>
  );
};

export default ProductCard;
