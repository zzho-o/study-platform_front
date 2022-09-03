import React from 'react'
import AppAppBar from '../modules/views/AppAppBar'
import Goal from './Goal';
import Notice from './Notice';
import RightBar from './RightBar';
import Sidebar from './Sidebar';
import ChatBox from "../Chat/ChatBox";
import styled from 'styled-components';

const Container = styled.div`
    font-family: 'Gothic A1', sans-serif;   
    display: flex;
    height:calc(100vh - 90px);
`;

const HomeContainer = styled.div`
    flex:3;
    display: flex;
`;

const StudyChat = () => {
  return (
    <>
      <AppAppBar />
    <Container>
      <Sidebar />
      <HomeContainer>
        <ChatBox />
      </HomeContainer>
    <RightBar />
    </Container>
    </>
  )
}

export default StudyChat
