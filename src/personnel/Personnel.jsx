import React, { useState } from "react";
import styled from "styled-components";
import PersonnelSidebar from "./PersonnelSidebar";
import Calendar from "../calendar/Calendar";
import Chat from "../Chat/Chat";
import MyStudy from "../modules/views/MyStudy";

const Container = styled.div`
  font-family: "Gothic A1", sans-serif;
  display: flex;
`;

const HomeContainer = styled.div`
  flex: 3;
  padding: 20px;
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
    <Container>
      <PersonnelSidebar setOption={setOption} />
      <HomeContainer>
        <Title>{`My ${option}`}</Title>
        {option === "Calendar" ? (
          <Calendar />
        ) : option === "Chat" ? (
          <Chat />
        ) : (
          <MyStudy />
        )}
      </HomeContainer>
    </Container>
  );
};

export default Personnel;
