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
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = React.useState("han");
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
        프로젝트원 모집합니다!
      </Typography>
      게시일 : 2022-09-01
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={2}>
          <Avatar sx={{ width: "150px", height: "150px" }} />
        </Grid>
        <Grid item xs={10}>
          <Typography>{displayName}</Typography>
          <Typography>Badge</Typography>
          <Typography>score</Typography>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Chip sx={{ mr: 1 }} label={"React"} />
          <Chip sx={{ mr: 1 }} label={"React"} />
        </Box>

        <Grid item xs={8}>
          기간 2022-09-01 - 2022-09-08
        </Grid>
        <Grid item xs={8}>
          <Typography>스터디원 모집합니다!</Typography>
        </Grid>
      </Grid>
      <Box></Box>
    </Box>
  );
}
