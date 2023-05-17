import {
  CssTextField,
  LinkGoBack,
} from "../../Custom/CustomComponents";
import { Grid, Box, Typography } from "@mui/material";
import "./checkout.css";

const Checkout = ({ navigate, handleChange, handleSubmit, errors }) => {
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
        flexGrow: 1
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
        }}
      >
        <form className="formContainer" onSubmit={handleSubmit}>
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

          <Typography
            variant="h6"
            color="primary.main"
            sx={{
              alignSelf: "flex-start",
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            BILLING DETAILS
          </Typography>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
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
                Name
              </Typography>
              <CssTextField
                placeholder="Alexi Ward"
                name="name"
                onChange={handleChange}
                error={errors.name ? true : false}
                helperText={errors.name}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                // marginBottom: "20px",
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
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
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
                Phone Number
              </Typography>
              <CssTextField
                placeholder="+1202-555-0136"
                name="phone"
                onChange={handleChange}
                error={errors.phone ? true : false}
                helperText={errors.phone}
              />
            </Grid>
          </Grid>

          <Typography
            variant="h6"
            color="primary.main"
            sx={{
              alignSelf: "flex-start",
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            SHIPPING INFO
          </Typography>
          <Grid
            container spacing={2}
          >
            <Grid
              item
              xs={12}
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
                Address
              </Typography>
              <CssTextField
                placeholder="1137 Wiliams Avenue"
                name="address"
                onChange={handleChange}
                error={errors.address ? true : false}
                helperText={errors.address}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
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
                Zip Code
              </Typography>
              <CssTextField
                placeholder="10001"
                name="zipCode"
                onChange={handleChange}
                error={errors.zipCode ? true : false}
                helperText={errors.zipCode}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
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
                City
              </Typography>
              <CssTextField
                placeholder="New York"
                name="city"
                onChange={handleChange}
                error={errors.city ? true : false}
                helperText={errors.city}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
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
                Country
              </Typography>
              <CssTextField
                placeholder="United States"
                name="country"
                onChange={handleChange}
                error={errors.country ? true : false}
                helperText={errors.country}
              />
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            color="primary.main"
            sx={{
              alignSelf: "flex-start",
              marginBottom: "20px",
              marginTop: "30px",
            }}
          >
            PAYMENT DETAILS
          </Typography>
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
                Payment Method
              </Typography>
          
        </form>
      </Box>
    </Box>
  );
};

export default Checkout;
