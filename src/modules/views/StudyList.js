import React, { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Container = styled.div`
  background-color: #123412;
  width: 100%;
  height: 50%
  font-family: "Gothic A1", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeContainer = styled.div`
  background-color: #121112;
  width: 100%;
  max-height: 100%;
  font-family: "Gothic A1", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  width: 90%;
`;

const Personnel = () => {
  const [option, setOption] = useState("Calendar");
  return (
    <HomeContainer>
      <Container>123</Container>
      <Container>123</Container>
    </HomeContainer>
  );
};

export default Personnel;
