import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "./modules/components/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormButton from "./modules/form/FormButton";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "flex",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "text.secondary" }}>
              <GitHubIcon />
            </Avatar>
            <Button
              fullWidth
              variant="contained"
              color="grey"
              sx={{ mt: 3, mb: 2 }}
            >
              GitHub으로 1초만에 가입
            </Button>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="계정 기억하기"
            />
            <FormButton
              sx={{ mt: 3, mb: 2 }}
              // disabled={submitting || sent}
              size="large"
              color="inherit"
              fullWidth
            >
              로그인
            </FormButton>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"회원가입"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
