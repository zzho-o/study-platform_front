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
import Chip from "@mui/material/Chip";
import Fab from "@mui/material/Fab";
import Switch from "@mui/material/Switch";

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
  const [state, setState] = React.useState({
    region: "",
    ct: "",
    classfy: "",
    career: "",
    sortBy: "",
    isRecruit: false,
  });
  const handleprops = (e) => {
    setState({ ...state, [e.target.label]: e.target.value });
  };

  const [region, setRegion] = React.useState("");
  const [ct, setCt] = React.useState("");
  const [classfy, setClassfy] = React.useState("");
  const [career, setCareer] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");
  const [isRecruit, setIsRecruit] = React.useState(false);
  const handleRegion = (e) => {
    setRegion(e.target.value);
    setCt("");
  };
  const city = {
    서울: ["마포구"],
    인천: ["계양구"],
    경기: ["수원시"],
  };

  const region_bundle = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "경기",
    "강원",
    "충남",
    "충북",
    "전남",
    "전북",
    "경남",
    "경북",
    "제주",
    "세종",
  ];

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
          <Container>
            <Container>
              <Grid container spacing={0}>
                <Grid item xs={0} md={1.5}>
                  <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="SL1">지역</InputLabel>
                    <Select
                      labelId="L1"
                      id="S1"
                      value={state.region}
                      label="region"
                      onChange={(e) => console.log(e)}
                    >
                      {region_bundle.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3} md={1.5}>
                  <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="SL5">시/구/군</InputLabel>
                    <Select
                      labelId="L5"
                      id="S5"
                      value={state.ct}
                      label="ct"
                      onChange={handleprops}
                    >
                      {city[region]
                        ? city[region].map((item) => (
                            <MenuItem value={item}>{item}</MenuItem>
                          ))
                        : null}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3} md={1.5}>
                  <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="Sl2">분류</InputLabel>
                    <Select
                      labelId="L2"
                      id="S2"
                      value={state.classfy}
                      onChange={handleprops}
                      label="classify"
                    >
                      <MenuItem value={"직장인"}>직장인</MenuItem>
                      <MenuItem value={"학생"}>학생</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3} md={1.5}>
                  <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="Sl3">경력</InputLabel>
                    <Select
                      labelId="L3"
                      id="S3"
                      value={state.career}
                      onChange={handleprops}
                      label="career"
                    >
                      <MenuItem value={"무관"}>무관</MenuItem>
                      <MenuItem value={"신입"}>신입</MenuItem>
                      <MenuItem value={"1년"}>1년</MenuItem>
                      <MenuItem value={"2년"}>2년</MenuItem>
                      <MenuItem value={"3년 이상"}>3년 이상</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3} md={1.5}>
                  <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="Sl4">정렬</InputLabel>
                    <Select
                      labelId="L4"
                      id="S4"
                      value={state.sortBy}
                      onChange={handleprops}
                      label="sortBy"
                    >
                      <MenuItem value={"인기순"}>인기순</MenuItem>
                      <MenuItem value={"최근순"}>최근순</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={3}>
                  <Switch
                    defaultChecked
                    color="secondary"
                    aria-label="isRecruit"
                  />
                  <Typography variant="subtitle1" gutterBottom component="div">
                    모집중만 보기
                  </Typography>
                </Grid>
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
            </Container>
            <Container
              sx={{
                mt: 2,
                mb: 2,
                display: "flex",
                flexDirection: "flex",
                alignItems: "center",
              }}
            >
              <Fab
                variant="extended"
                size="midium"
                color="secondary"
                sx={{ ml: 1, mr: 1 }}
              >
                front-end
              </Fab>
              <Fab
                variant="extended"
                size="midium"
                color="secondary"
                sx={{ ml: 1, mr: 1 }}
              >
                back-end
              </Fab>
              <Fab
                variant="extended"
                size="midium"
                color="secondary"
                sx={{ ml: 1, mr: 1 }}
              >
                모바일
              </Fab>
              <Fab
                variant="extended"
                size="midium"
                color="secondary"
                sx={{ ml: 1, mr: 1 }}
              >
                기타
              </Fab>
              <Fab
                variant="extended"
                size="midium"
                color="secondary"
                sx={{ ml: 1, mr: 1 }}
              >
                모두보기
              </Fab>
            </Container>
            <Button
              color="secondary"
              size="large"
              variant="contained"
              component="a"
              href="www.naver.com"
              sx={{ mt: 8 }}
            >
              찾기
            </Button>
          </Container>
        ) : null}
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
