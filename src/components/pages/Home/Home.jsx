import { Typography, Box, Button } from "@mui/material";
import { useParams } from "react-router";
import ProductListContainer from "../ProductsList/ProductListContainer";
import Loading from "../../common/loading/Loading";
import { getAllProducts } from "../../../services/products";
import { useEffect, useState } from "react";
import MiniCategoryCardContainer from "../../common/miniCategoryCard/MiniCategoryCardContainer";
// // import { ButtonCustom } from "../../Custom/CustomComponents";
import imageSpeakerZx9 from "../../../assets/home/desktop/image-speaker-zx9.png";
import { CardMedia } from "@mui/material";
import { ButtonCustom4 } from "../../Custom/CustomComponents";
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
        <>
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
          <Box
            sx={{
              // backgroundColor: "primary.main",
              width: "100%",
              height: {md:"560px", xs: "720px"},
              padding: { lg: "0 10rem", md: "0 2.5rem", xs: "0 1.5rem" },
            }}
          >
            <Box
              sx={{
                backgroundColor: "primary.main",
                // backgroundImage: `url(${imageSpeakerZx9})` /*url de assets*/,
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "160px 104px",
                // backgroundSize: "370px 470px",
                width: "100%",
                height: {md:"560px", xs: "720px"},
                borderRadius: "8px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                justifyContent: {md:"center", xs: "flex-end"},
                alignItems: {md:"flex-end", xs: "center"},
                flexDirection: "column",
              }}
            >
              <CardMedia
                sx={{
                  height: {lg: "460px", md:"390px", xs:"237px"},
                  position: "absolute",
                  top: {lg: "344px", md:"375px", xs:"160px"},
                  width: {lg: "380px", md:"319px",xs:"197.21px"},
                  left: {lg:"344px", md:"200px",xs:"50%"},
                  transform: "translate(-50%, -50%)",
                  zIndex: "40",
                }}
                image={imageSpeakerZx9}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: {md:"412px",xs: "184px"},
                  left: {md:"365px", xs: "50%"},
                  transform: "translate(-50%, -50%)",
                  width: "944px",
                  height: "944px",
                  borderRadius: "50%",
                  border: "1px solid #FFFFFF",
                  opacity: "0.2",
                  pointerEvents: "none",
                  boxSizing: "border-box",
                }}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  top: {md:"419px", xs: "184px"},
                  left: {md: "343px", xs: "50%"},
                  transform: "translate(-50%, -50%)",
                  width: "542px",
                  height: "542px",
                  borderRadius: "50%",
                  border: "1px solid #FFFFFF",
                  pointerEvents: "none",
                  boxSizing: "border-box",
                  opacity: "0.2",
                }}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  top: {md:"419px", xs: "183px"},
                  left: {md: "343px", xs: "50%"},
                  transform: "translate(-50%, -50%)",
                  width: "472px",
                  height: "472px",
                  borderRadius: "50%",
                  border: "1px solid #FFFFFF",
                  pointerEvents: "none",
                  boxSizing: "border-box",
                  opacity: "0.2",
                }}
              ></Box>
              <Box
                sx={{
                  width: {sm:"349px", xs: "304px"},
                  zIndex: "100",
                  height: "303px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: {xs:"center", md: "flex-start"},
                  marginBottom: "64px"
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "56px",
                    lineHeight: "58px",
                    letterSpacing: "2px",
                    textAlign: {xs: "center", md: "start"},
                    color: "secondary.second"
                  }}
                >
                  ZX9 SPEAKER
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "15px",
                    lineHeight: "25px",
                    mixBlendMode: "normal",
                    opacity: "0.75",
                    textAlign: {xs: "center", md: "start"},
                    color: "secondary.second"
                  }}
                >
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </Typography>
                <ButtonCustom4 sx={{textTransform: "uppercase", width: "160px", }}>See Product</ButtonCustom4>
              </Box>
            </Box>
          </Box>
        </>
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
