import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

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
  const [region, setRegion] = React.useState("");
  const [ct, setCt] = React.useState("");
  const [classfy, setClassfy] = React.useState("");
  const [career, setCareer] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");
  const handleRegion = (e) => {
    setRegion(e.target.value);
    setCt("");
  };
  const city = {
    서울: ["마포구"],
    인천: ["계양구"],
    경기: ["수원시"],
  };
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
            <Grid item xs={100} md={4}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="SL1">지역</InputLabel>
                <Select
                  labelId="L1"
                  id="S1"
                  value={region}
                  label="region"
                  onChange={handleRegion}
                >
                  <MenuItem value={"서울"}>서울</MenuItem>
                  <MenuItem value={"경기"}>경기</MenuItem>
                  <MenuItem value={"인천"}>인천</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="SL5">시/구/군</InputLabel>
                <Select
                  labelId="L5"
                  id="S5"
                  value={ct}
                  label="region"
                  onChange={(e) => setCt(e.target.value)}
                >
                  {city[region]
                    ? city[region].map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))
                    : null}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="Sl2">분류</InputLabel>
                <Select
                  labelId="L2"
                  id="S2"
                  value={classfy}
                  onChange={(e) => setClassfy(e.target.value)}
                  label="classification"
                >
                  <MenuItem value={"직장인"}>직장인</MenuItem>
                  <MenuItem value={"학생"}>학생</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="Sl3">경력</InputLabel>
                <Select
                  labelId="L3"
                  id="S3"
                  value={career}
                  onChange={(e) => setCareer(e.target.value)}
                  label="career"
                >
                  <MenuItem value={"무관"}>무관</MenuItem>
                  <MenuItem value={"신입"}>신입</MenuItem>
                  <MenuItem value={"1년"}>1년</MenuItem>
                  <MenuItem value={"2년"}>2년</MenuItem>
                  <MenuItem value={"3년 이상"}>3년 이상</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="Sl4">정렬</InputLabel>
                <Select
                  labelId="L4"
                  id="S4"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  label="sort"
                >
                  <MenuItem value={"인기순"}>인기순</MenuItem>
                  <MenuItem value={"최근순"}>최근순</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid container spacing={5}>
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
            </Grid> */}
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
          ref={props.ref}
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
