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
import Fab from "@mui/material/Fab";
import Switch from "@mui/material/Switch";

function ProductHowItWorks(props) {
  const [state, setState] = React.useState({
    region: "",
    ct: "",
    classfy: "",
    career: "",
    sortBy: "",
    isRecruit: false,
  });
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

    console.log(state, e.target);
  };
  const city = {
    서울: [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],
    부산: [
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
    ],
    대구: ["중구", "동구", "서구", "남구", "북구", "수성구", "달서구"],
    인천: [
      "중구",
      "동구",
      "미추홀구",
      "연수구",
      "남동구",
      "부평구",
      "계양구",
      "서구",
    ],
    광주: ["동구", "서구", "남구", "북구", "광산구"],
    대전: ["동구", "중구", "서구", "유성구", "대덕구"],
    울산: ["중구", "남구", "동구", "북구"],
    경기: [
      "수원시",
      "성남시",
      "의정부시",
      "안양시",
      "부천시",
      "광명시",
      "평택시",
      "동두천시",
      "안산시",
      "고양시",
      "과천시",
      "구리시",
      "남양주시",
      "오산시",
      "시흥시",
      "군포시",
      "의왕시",
      "하남시",
      "용인시",
      "파주시",
      "이천시",
      "안성시",
      "김포시",
      "화성시",
      "광주시",
      "양주시",
      "포천시",
      "여주시",
    ],
    강원: [
      "춘천시",
      "원주시",
      "강릉시",
      "동해시",
      "태백시",
      "속초시",
      "삼척시",
    ],
    충남: [
      "천안시",
      "공주시",
      "보령시",
      "아산시",
      "서산시",
      "논산시",
      "계룡시",
      "당진시",
    ],
    충북: ["청주시", "충주시", "제천시"],
    전남: ["목포시", "여수시", "순천시", "나주시", "광양시"],
    전북: ["전주시", "군산시", "익산시", "정읍시", "남원시", "김제시"],
    경남: [
      "창원시",
      "진주시",
      "통영시",
      "사천시",
      "김해시",
      "밀양시",
      "거제시",
      "양산시",
    ],
    경북: [
      "포항시",
      "경주시",
      "김천시",
      "안동시",
      "구미시",
      "영주시",
      "영천시",
      "상주시",
      "문경시",
      "경산시",
    ],
    제주: ["제주시", "서귀포시"],
    세종: ["None"],
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
                      name="region"
                      id="S1"
                      value={state.region}
                      label="region"
                      onChange={handleState}
                    >
                      {region_bundle.map((item) => (
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
                      {city[state.region]
                        ? city[state.region].map((item) => (
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
              href="/SearchResert"
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

export default ProductHowItWorks;
