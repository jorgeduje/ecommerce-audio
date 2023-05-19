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
          paddingLeft: { lg: "10rem", md: "7.5rem", xs: "1.5rem" },
          paddingRight: { lg: "10rem", md: "7.5rem", xs: "1.5rem" },
          paddingTop: { lg: "10rem", xs: "7.5rem" },
          flexDirection: { md: isPair ? "row" : "row-reverse", xs: "column" },
          boxShadow: "none",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: { lg: "560px", md: "530px", xs: "352px" },
            width: { lg: "47.5%", md: "42.5%", xs: "100%" },
            backgroundImage: `url(${product.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "8px",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box
          sx={{
            height: { md: "343px", sm: "302px", xs: "300px" },
            width: { lg: "445px", md: "343px", sm: "572px", xs: "100%" },
            display: "flex",
            marginTop: { md: "0px", xs: "52px" },
            flexDirection: "column",
            alignItems: { md: "start", xs: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: {sm:"40px", xs: "28px"},
              lineHeight: "44px",
              letterSpacing: "1.42857px",
              textTransform: "uppercase",
              textAlign: { md: "start", xs: "center" },
            }}
          >
            {product.name}
          </Typography>
          <Typography
            sx={{
              textAlign: { md: "start", xs: "center" },
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
              <Typography variant="h3">$ {product.price}</Typography>{" "}
              <ContadorContainer onAdd={onAdd} />{" "}
            </>
          )}
        </Box>
      </Card>
    </>
  );
};

export default ProductCard;
