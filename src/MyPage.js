import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "./modules/components/Typography";
import TextField from "./modules/components/TextField";
import Button from "./modules/components/Button";

export default function SignUp() {
  const [displayName, setDisplayName] = React.useState("zzho");
  const [email, setEmail] = React.useState("aaa@naver.com");
  const [career, setCareer] = React.useState("신입");
  const [tech, setTech] = React.useState(["react", "javascript"]);
  const [st, setSt] = React.useState("");
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
        display: "flex",
        flexDirection: "column",
        alignItems: "flex",
      }}
    >
      <Box
        sx={{
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <Avatar sx={{ width: "150px", height: "150px" }}></Avatar>
      </Box>
      <TextField
        noBorder
        placeholder="닉네임"
        variant="outlined"
        value={displayName}
        sx={{ width: "50%", marginBottom: 3 }}
      />
      <TextField
        noBorder
        placeholder="이메일"
        variant="outlined"
        value={email}
        sx={{ width: "50%", marginBottom: 3 }}
      />
      <TextField
        noBorder
        placeholder="경력"
        variant="outlined"
        value={career}
        sx={{ width: "50%", marginBottom: 3 }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "flex",
          alignItems: "flex",
        }}
      >
        <TextField
          noBorder
          placeholder="찾으시는 기술 스택을 적어주세요"
          variant="outlined"
          value={st}
          onChange={(e) => setSt(e.target.value)}
          sx={{ width: "50%", marginBottom: 3 }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          sx={{ width: "20%", mb: 5 }}
        >
          검색
        </Button>
      </Box>
      {/* 이쪽 수정 */}
      <Typography variant="h4" align="left" component="h2">
        {"기술 스택"}
      </Typography>

      {tech.map((val) => (
        <Typography>{`${val}`}</Typography>
      ))}
    </Box>
  );
}
