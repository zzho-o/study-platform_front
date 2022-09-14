import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import Switch from "@mui/material/Switch";
import States from "../../StaticState";
import { useNavigate } from "react-router-dom";

function MainDetailSearch(props) {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    region: "",
    ct: "",
    classfy: "",
    career: "",
    sortBy: "",
    stack: [1, 2, 3],
    isRecruit: false,
    tech: "",
    front: ["JavaScript", "TypeScript", "React", "Vue"],
    back: ["Python", "C", "C++", "Java", "Spring", "Django"],
    mobile: ["Android", "IOS"],
    etc: ["직접입력"],
  });
  const [selected, setSelected] = React.useState([]);
  const [tech, setTech] = React.useState(false);
  const handleTech = (e) => {
    if (state.tech === e.currentTarget.name) {
      setTech(false);
      setState({ ...state, tech: "" });
    } else {
      if (e.currentTarget.name === "all") {
        setTech([
          ...state["front"],
          ...state["back"],
          ...state["mobile"],
          ...state["etc"],
        ]);
        setState({ ...state, tech: e.currentTarget.name });
      } else {
        setTech(state[e.currentTarget.name]);
        setState({ ...state, tech: e.currentTarget.name });
      }
    }
    console.log(tech, e.currentTarget.name, state.tech);
  };
  const handleSelected = (e) => {
    if (!selected.includes(e.currentTarget.name)) {
      setSelected([...selected, e.currentTarget.name]);
    }
  };
  const handleSwitch = () => {
    setState({
      ...state,
      isRecruit: !state.isRecruit,
    });
  };
  const handleState = (e) => {
    e.target.name === "region"
      ? setState({
          ...state,
          ct: "",
          [e.target.name]: e.target.value,
        })
      : setState({ ...state, [e.target.name]: e.target.value });
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
          <Container>
            <Container>
              <Grid container spacing={0}>
                <Grid item xs={0} md={1.5}>
                  <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="SL1">지역</InputLabel>
                    <Select
                      labelId="L1"
                      name="region"
                      id="S1"
                      value={state.region}
                      label="region"
                      onChange={handleState}
                    >
                      {States.region_bundle.map((item) => (
                        <MenuItem value={item}>{item}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={3} md={1.5}>
                  <FormControl sx={{ m: 1, minWidth: 100 }}>
                    <InputLabel id="SL5">시/구</InputLabel>
                    <Select
                      labelId="L5"
                      name="ct"
                      id="S5"
                      value={state.ct}
                      label="ct"
                      onChange={handleState}
                    >
                      {States.city[state.region]
                        ? States.city[state.region].map((item) => (
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
                      name="classify"
                      id="S2"
                      value={state.classify}
                      onChange={handleState}
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
                      name="career"
                      id="S3"
                      value={state.career}
                      onChange={handleState}
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
                      name="sortBy"
                      id="S4"
                      value={state.sortBy}
                      onChange={handleState}
                      label="sortBy"
                    >
                      <MenuItem value={"인기순"}>인기순</MenuItem>
                      <MenuItem value={"최근순"}>최근순</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid xs={3}>
                  <Switch
                    name="switch"
                    checked={state.isRecruit}
                    onChange={handleSwitch}
                    color="secondary"
                    aria-label="isRecruit"
                  />
                  <Typography variant="subtitle1" gutterBottom component="div">
                    모집중만 보기
                  </Typography>
                </Grid>
              </Grid>
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
                name="front"
                onClick={handleTech}
              >
                front-end
              </Fab>
              <Fab
                variant="extended"
                size="midium"
                color="secondary"
                sx={{ ml: 1, mr: 1 }}
                name="back"
                onClick={handleTech}
              >
                back-end
              </Fab>
              <Fab
                variant="extended"
                size="midium"
                color="secondary"
                sx={{ ml: 1, mr: 1 }}
                name="mobile"
                onClick={handleTech}
              >
                모바일
              </Fab>
              <Fab
                variant="extended"
                size="midium"
                color="secondary"
                sx={{ ml: 1, mr: 1 }}
                name="etc"
                onClick={handleTech}
              >
                기타
              </Fab>
              <Fab
                variant="extended"
                size="midium"
                color="secondary"
                sx={{ ml: 1, mr: 1 }}
                name="all"
                onClick={handleTech}
              >
                모두보기
              </Fab>
            </Container>
            <Stack
              sx={{
                ml: 4,
                mt: 2,
                mb: 2,
                display: "flex",
                flexDirection: "flex",
                alignItems: "center",
              }}
              spacing={1}
              direction="row"
            >
              {tech
                ? tech.map((item) => (
                    <Fab
                      variant="extended"
                      size="small"
                      color="secondary"
                      sx={{ ml: 1, mr: 1 }}
                      name={item}
                      onClick={handleSelected}
                    >
                      {`${item}`}
                    </Fab>
                  ))
                : null}
            </Stack>
            <Box>
              {selected
                ? selected.map((item) => <Chip sx={{ mr: 1 }} label={item} />)
                : null}
            </Box>
            <Button
              color="secondary"
              size="large"
              variant="contained"
              component="a"
              onClick={() => navigate("/Search")}
              sx={{ mt: 8 }}
            >
              찾기
            </Button>
          </Container>
        ) : null}
        {/* 백에서 데이터 받고 여기에 게시물 컴포넌트 렌더링 하기 */}
      </Container>
    </Box>
  );
}

export default MainDetailSearch;
