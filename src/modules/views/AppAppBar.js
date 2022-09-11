import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import styled from "styled-components";
import Modal from "react-modal";
import SignIn from "../../SignIn";
import { Typography } from "@mui/material";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

function AppAppBar() {
  const [isLogin, setIsLogin] = React.useState(true);
  const [modalOpen, setModalOpen] = React.useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {"여기!"}
              <Typography variant="h4" color="white">
                자
              </Typography>
              {"바"}
              <Typography variant="h4" color="white">
                두
              </Typography>
              {"명이요!"}
            </Box>
          </Link>
          {isLogin ? (
            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
              <LoginArea onClick={() => setModalOpen(true)}>
                로그인 / 회원가입
              </LoginArea>
            </Box>
          ) : (
            <Box sx={{ flex: 1 }}></Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      {modalOpen && <SignIn closeModal={closeModal} />}
    </div>
  );
}
const LoginArea = styled.div`
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  width: 150px;
  height: 35px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background-color: #cc425e;
  border-radius: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default AppAppBar;
