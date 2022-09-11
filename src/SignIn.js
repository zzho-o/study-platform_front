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
import { KAKAO_AUTH_URL } from "./Kakao";
import { GITHUB_AUTH_URL } from "./GitHub";
import Modal from "react-modal";

const theme = createTheme();

export default function SignIn() {
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const closeModal = () => {
    setIsModalOpen(false);
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
    <ThemeProvider theme={theme}>
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(35, 35, 35, 0.46)",
              zIndex: 99999,
            },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              transform: "translate(-50%, -50%)",
              border: "none",
              backgroundColor: "rgba(198, 211, 236, 0.9)",
              borderRadius: "10px",
              outline: "none",
              overflow: "hidden",
              zIndex: 99999,
              boxSizing: "border-box",
            },
          }}
        >
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "black" }}>
                  <GitHubIcon />
                </Avatar>
                <Button
                  fullWidth
                  variant="contained"
                  href={GITHUB_AUTH_URL}
                  sx={{ mt: 3, mb: 2, bgcolor: "black" }}
                >
                  GitHub으로 간편 로그인
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "text.secondary" }}>
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: `url(data:image/png;base64,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)`,
                    }}
                  />
                </Avatar>
                <Button
                  fullWidth
                  variant="contained"
                  href={KAKAO_AUTH_URL}
                  sx={{ mt: 3, mb: 2, bgcolor: "yellow", color: "black" }}
                >
                  Kakaotalk으로 간편 로그인
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
              </Box>
            </Box>
          </Container>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
