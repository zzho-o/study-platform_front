import React from 'react'
import styled from 'styled-components';
import MySteps from './MySteps';

const Container = styled.div`
    padding:20px;
    box-shadow: 2px 4px 10px 1px rgba(201,201,201,0.47);
    border-radius: 10px;
    margin-bottom: 30px;
`;

const Title = styled.div`
    font-weight: 500;
    color:rgb(160, 160, 160);
    margin-bottom: 20px;
`;

const Goal = () => {
  return (
    <Container>
      <Title>
        Goal Process
      </Title>
      <MySteps />
    </Container>
  )
}

export default Goal
