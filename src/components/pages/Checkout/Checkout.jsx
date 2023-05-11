import {
    ButtonCustom,
    CssTextField,
    LinkGoBack,
  } from "../../Custom/CustomComponents";
  import {
    Box,
    Typography,
  } from "@mui/material";



const Checkout = ({
    navigate,
    handleChange,
    handleSubmit,
    errors,}) => {
    
  return (
    <Box
      sx={{
        padding: {
          xs: "20px 0px",
          sm: "48px 0px",
          lg: "80px 0px",
        },
        backgroundColor: "primary.third",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "600px",
          },
          marginBottom: "28px",
        }}
      >
        <LinkGoBack onClick={() => navigate(-1)}>Go Back</LinkGoBack>
      </Box>
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "600px",
          },
          height: "500px",
        }}
      >
        <form className="cajaLogin" onSubmit={handleSubmit}>
          <Typography
            variant="h1"
            color="secondary.third"
            sx={{
              textTransform: "uppercase",
              width: "100%",
              fontSize: "32px",
              fontFamily: "Manrope",
              fontWeight: "700",
              letterSpacing: "1.14286px",
            }}
          >
            CHECKOUT
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  marginBottom: "9px",
                  fontFamily: "Manrope",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "16px",
                  letterSpacing: "-0.214286px",
                }}
              >
                Email Address
              </Typography>
              <CssTextField
                placeholder="alexei@mail.com"
                name="email"
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
            </Box>
            
          </Box>
          <ButtonCustom
            sx={{ width: { xs: "100%", sm: "284px" } }}
            type="submit"
          >
            Continue
          </ButtonCustom>
        </form>
      </Box>
      
    </Box>
  )
}

export default Checkout