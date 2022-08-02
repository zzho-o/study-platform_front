import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import TextField from "../components/TextField";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks(props) {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          {props.searchBy}
        </Typography>
        {props.searchBy !== "" ? (
          <div>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <Box sx={item}>
                  <Box sx={number}>1.</Box>
                  <Box
                    component="img"
                    src="/static/themes/onepirate/productHowItWorks1.svg"
                    alt="suitcase"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    Appointment every Wednesday 9am.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={item}>
                  <Box sx={number}>2.</Box>
                  <Box
                    component="img"
                    src="/static/themes/onepirate/productHowItWorks2.svg"
                    alt="graph"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    First come, first served. Our offers are in limited
                    quantities, so be quick.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={item}>
                  <Box sx={number}>3.</Box>
                  <Box
                    component="img"
                    src="/static/themes/onepirate/productHowItWorks3.svg"
                    alt="clock"
                    sx={image}
                  />
                  <Typography variant="h5" align="center">
                    {"New offers every week. New experiences, new surprises. "}
                    {"Your Sundays will no longer be alike."}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Button
              color="secondary"
              size="large"
              variant="contained"
              component="a"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ mt: 8 }}
            >
              Get started
            </Button>
          </div>
        ) : null}

        <TextField
          noBorder
          placeholder="찾고 있는 스터디나 프로젝트의 내용을 적어주세요"
          variant="standard"
          sx={{ width: "100%", mt: 3, mb: 2 }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ width: "20%" }}
        >
          검색
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
