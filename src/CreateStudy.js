import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "./modules/components/Typography";
import TextField from "./modules/components/TextField";
import Button from "./modules/components/Button";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function SignUp() {
  const [displayName, setDisplayName] = React.useState("zzho");
  const [email, setEmail] = React.useState("aaa@naver.com");
  const [career, setCareer] = React.useState("신입");
  const [tech, setTech] = React.useState(["react", "javascript"]);
  const [st, setSt] = React.useState("");
  const title = "";
  const list = ["react", "spring", "javascript"];
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
            <Grid xs={12}>
              <TextField
                noBorder
                label="study or project"
                placeholder="임시 텍스트필드"
                variant="outlined"
                value={title}
                sx={{ width: "100%", mb: 3 }}
              />
            </Grid>
            <Grid xs={12}>
              <TextField
                noBorder
                label="study or project"
                placeholder="임시 텍스트필드"
                variant="outlined"
                value={title}
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            noBorder
            label="study or project"
            placeholder="임시 텍스트필드"
            variant="outlined"
            value={title}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            noBorder
            placeholder="시"
            variant="outlined"
            value={title}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            noBorder
            placeholder="구"
            variant="outlined"
            value={title}
            sx={{ width: "50%" }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            noBorder
            placeholder="카메라 여부"
            variant="outlined"
            value={title}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            noBorder
            placeholder="마이크 여부"
            variant="outlined"
            value={title}
            sx={{ width: "50%" }}
          />
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
