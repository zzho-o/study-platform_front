import React from 'react'
import styled from 'styled-components';
import Online from './Online';

const Right = styled.div`
    padding: 10px;
    flex:1;
    border-left: 0.5px solid rgb(230, 227, 227);
`;

const Title = styled.p`
    font-size: 10px;
    font-weight: bold;
    color:#999;
    margin-top: 15px;
    margin-bottom: 5px;
`;

const RightBar = () => {
  return (
    <Right>
      <Title>ONLINE</Title>
        <Online />
        <Online />
        <Title>OFFLINE</Title>
        <Online/>
    </Right>
  )
}

export default RightBar
