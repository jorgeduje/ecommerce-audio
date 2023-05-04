import { Typography, Button, Box } from "@mui/material";
import "../../../../src/assets/shared/desktop/icon-arrow-right.svg";
import "./categoryCard.css";

const CategoryCard = ({ data }) => {
  const { image, title } = data;
  return (
    <div>
      <Box
        bgcolor={"primary.third"}
        width={"350px"}
        borderRadius={"5px"}
        className="categoryCardBox"
        height={"200px"}
        mt={"7rem"}
        mb={"7rem"}
        position={"relative"}
      >
        <Box position={"absolute"} top={"-50%"} left={"50%"}>
          <img src={image} alt={title} className="imgCategoryCard" width={"120px"} height={"140px"}/>
        </Box>
        <Typography
          variant="body2"
          sx={{ fontSize: "18px", fontWeight: "700", fontFamily: "Manrope" }}
          textAlign={"center"}
        >
          {title}
        </Typography>
        <Button
          sx={{
            fontSize: "13px",
            fontWeight: "700",
            fontFamily: "Manrope",
            alignSelf: "center",
          }}
        >
          SHOP{" "}
          <img
            src="../../../../src/assets/shared/desktop/icon-arrow-right.svg"
            alt="shop button"
          />
        </Button>
      </Box>
    </div>
  );
};

export default CategoryCard;
