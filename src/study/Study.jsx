import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar';
import AppAppBar from '../modules/views/AppAppBar'
import Goal from './Goal';
import Online from './Online';
import Notice from './Notice';
import RightBar from './RightBar';

const Container = styled.div`
font-family: 'Gothic A1', sans-serif;   
    display: flex;
    height:calc(100vh - 90px);
`;

const HomeContainer = styled.div`
    flex:3;
    padding: 20px;
`;


const Study = () => {
  return (
      <>
      <AppAppBar />
    <Container>
      <Sidebar />
      <HomeContainer>
        <Goal />
        <Notice />
      </HomeContainer>
    <RightBar />
    </Container>
    </>
  )
}

export default Study
