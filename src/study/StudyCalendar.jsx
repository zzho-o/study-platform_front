import React from 'react'
import styled from 'styled-components';
import AppAppBar from '../modules/views/AppAppBar'
import RightBar from './RightBar'
import Sidebar from './Sidebar'
import Calendar from "../calendar/Calendar";

const Container = styled.div`
    font-family: 'Gothic A1', sans-serif;   
    display: flex;
`;

const HomeContainer = styled.div`
    flex:3;
    display: flex;
    flex-direction:column;
    align-items: center;
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: 400;
    color:#616161;
`;

const StudyCalendar = () => {
  return (
    <>
      <AppAppBar />
    <Container>
      <Sidebar />
      <HomeContainer>
        <Title>00팀 일정</Title>
        <Calendar />
      </HomeContainer>
    <RightBar />
    </Container>
    </>
  )
}

export default StudyCalendar
