import { Typography, Box, Button } from "@mui/material";
import { useParams } from "react-router";
import ProductListContainer from "../ProductsList/ProductListContainer";
import Loading from "../../common/loading/Loading";
import { getAllProducts } from "../../../services/products";
import { useEffect, useState } from "react";
import MiniCategoryCardContainer from "../../common/miniCategoryCard/MiniCategoryCardContainer";
// import { ButtonCustom } from "../../Custom/CustomComponents";
const Home = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = getAllProducts();
    const categoriasDeseadas = ["headphones", "speakers", "earphones"];
    const objetosPorCategoria = {};

    data.then((res) => {
      res.data.forEach((elemento) => {
        if (categoriasDeseadas.includes(elemento.category)) {
          if (!objetosPorCategoria[elemento.category]) {
            objetosPorCategoria[elemento.category] = elemento;
          }
        }
      });

      const objetosFiltrados = Object.values(objetosPorCategoria);
      setItems(objetosFiltrados);
    });
  }, []);

  console.log(items);

  if (!items) {
    return <Loading />;
  }

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "primary.second",
          backgroundImage: {
            xs: `url(${"https://res.cloudinary.com/dkwjizhdg/image/upload/v1682512392/e-commerce/headsphones_fqjywk.jpg"})`,
            lg: "none",
          },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: { lg: "0 10rem", md: "0 2.5rem" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "73%", lg: "40%" },
            display: "flex",
            justifyContent: { xs: "center", lg: "flex-start" },
            height: "60vh",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            <Typography
              variant="subtitle1"
              color="primary.third"
              className="subtitle1"
              sx={{
                mixBlendMode: "normal",
                opacity: "0.5",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "19px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              NEW PRODUCT
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: { xs: "36px", sm: "51px" },
                lineHeight: "58px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                margin: "24px 0px",
              }}
              color="primary.fourth"
              className="h2Home"
            >
              XX99 Mark II Headphones
            </Typography>
            <Typography
              variant="body2"
              color="primary.third"
              className="body2"
              sx={{
                mixBlendMode: "normal",
                opacity: "0.75",
                fontWeightt: "500",
                fontSize: "15px",
                lineHeight: "25px",
                width: { xs: "100%", lg: "80%" },
              }}
            >
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
            display: { xs: "none", lg: "block" },
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
      {!categoryName && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            padding: { lg: "0 10rem", md: "0 2.5rem", xs: "0 1.5rem" },
            marginTop: "120px",
            justifyContent: "space-between",
          }}
        >
          <MiniCategoryCardContainer
            images={items?.[0]?.image}
            category={items?.[0]?.category}
          />
          <MiniCategoryCardContainer
            images={items?.[1]?.image}
            category={items?.[1]?.category}
          />
          <MiniCategoryCardContainer
            images={items?.[2]?.image}
            category={items?.[2]?.category}
          />
        </Box>
      )}
      
      <ProductListContainer categoryName={categoryName} />

      {categoryName && (
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            padding: { lg: "0 10rem", md: "0 2.5rem", xs: "0 1.5rem" },
            marginTop: "120px",
            justifyContent: "space-between",
          }}
        >
          <MiniCategoryCardContainer
            images={items?.[0]?.image}
            category={items?.[0]?.category}
          />
          <MiniCategoryCardContainer
            images={items?.[1]?.image}
            category={items?.[1]?.category}
          />
          <MiniCategoryCardContainer
            images={items?.[2]?.image}
            category={items?.[2]?.category}
          />
        </Box>
      )}
    </div>
  );
};

export default Home;
