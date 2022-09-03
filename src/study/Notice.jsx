import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding:20px;
    box-shadow: 2px 4px 10px 1px rgba(201,201,201,0.47);
    border-radius: 10px;
`;

const Title = styled.div`
    font-weight: 500;
    color:rgb(160, 160, 160);
    margin-bottom: 20px;
`;

const Notice = () => {
  return (
    <Container>
      <Title>
        Notice
      </Title>
    </Container>
  )
}

export default Notice
