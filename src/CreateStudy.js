import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "./modules/components/Typography";
import TextField from "./modules/components/TextField";
import Button from "./modules/components/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import states from "./StaticState";

export default function SignUp() {
  const [displayName, setDisplayName] = React.useState("zzho");
  const [email, setEmail] = React.useState("aaa@naver.com");
  const [career, setCareer] = React.useState("신입");
  const [tech, setTech] = React.useState(["react", "javascript"]);
  const [st, setSt] = React.useState("");
  const title = "";
  const list = [];
  const [study, setStudy] = React.useState("");
  const [ct, setCt] = React.useState("");
  const [rg, setRg] = React.useState("");
  const [camera, setCamera] = React.useState("");
  const [mic, setMic] = React.useState("");

  const handleChange = (e) => {
    setStudy(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      sx={{
        marginLeft: 10,
        mr: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex",
      }}
    >
      <Typography sx={{ mt: 2 }} variant="h4">
        게시글 작성
      </Typography>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={2}>
          <Avatar sx={{ width: "150px", height: "150px" }} />
        </Grid>
        <Grid item xs={10}>
          <Typography>{displayName}</Typography>
          <Typography>Badge</Typography>
          <Typography>score</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            noBorder
            label="제목"
            placeholder="제목을 입력해 주세요"
            variant="outlined"
            value={title}
            sx={{ width: "80%", marginBottom: 3 }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            noBorder
            label="태그"
            variant="outlined"
            value={title}
            sx={{ width: "100%", marginBottom: 3 }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={{ width: "100%" }}
          >
            검색
          </Button>
        </Grid>
        <Grid item xs={8}>
          {list.map((item) => (
            <Chip label={item} color="secondary" />
          ))}
        </Grid>
        <Grid item xs={4}>
          <TextField
            noBorder
            label="모집 기간"
            placeholder="임시 텍스트필드"
            variant="outlined"
            value={title}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            noBorder
            label="스터디 기간"
            placeholder="임시 텍스트필드"
            variant="outlined"
            value={title}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">종류</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={study}
                  label="Study"
                  onChange={handleChange}
                >
                  <MenuItem value={"study"}>스터디</MenuItem>
                  <MenuItem value={"project"}>프로젝트</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">시</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rg}
              label="Rg"
              onChange={(e) => setRg(e.target.value)}
            >
              {states.region_bundle.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">구</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ct}
              label="Study"
              onChange={(e) => setCt(e.target.value)}
            >
              {states.city[rg]
                ? states.city[rg].map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))
                : null}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">카메라</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={camera}
              label="Camera"
              onChange={(e) => setCamera(e.target.value)}
            >
              <MenuItem value={"on"}>on</MenuItem>
              <MenuItem value={"off"}>off</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">마이크</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mic}
              label="Mic"
              onChange={(e) => setMic(e.target.value)}
            >
              <MenuItem value={"on"}>on</MenuItem>
              <MenuItem value={"off"}>off</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            minRows={10}
            style={{ width: "100%", marginTop: 20 }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              color="secondary"
              size="large"
              variant="contained"
              component="a"
              href="/"
              sx={{ mt: 5, mb: 5 }}
            >
              게시
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              color="secondary"
              size="large"
              variant="contained"
              component="a"
              href="/"
              sx={{ mt: 5, mb: 5 }}
            >
              취소
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box></Box>
    </Box>
  );
}
