import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    cursor:pointer;

    &:hover{
        background-color: #f1f1f1;
    }

    ${(props) => props.unread === true && `background-color:#fffde9;`}
`;

const ConversationImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;

const OnlineBadge = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    ${(props) => props.online === true && `background-color: limegreen;`}
    bottom: 10%;
    right: 25%;
    border: 2px solid white;
`;

const Left = styled.div`
    flex:2;
    position: relative;
`;
const Right = styled.div`
    flex:7;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ConversationName = styled.span`
    font-weight: 500;
    font-size: 14px;
`;

const ConversationTime = styled.span`
    font-size: 12px;
    color:gray;
`;

const ConversationMessage = styled.p`
    font-size: 14px;
`;

const UnReadBadge = styled.div`
    width: 20px;
    height: 20px;
    background-color:tomato;
    color:white;
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 12px;
    font-weight: 500;
`;

const Conversation = ({unread, online}) => {
  return (
    <Container unread={unread}>
        <Left>
            <ConversationImage src="data:image/jpeg;base64,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" />
            <OnlineBadge online={online}></OnlineBadge>
        </Left>
        <Right>
            <Top>
                <ConversationName>BTS V</ConversationName>
                <ConversationTime>1시간전</ConversationTime>
            </Top>

            <Bottom>
                <ConversationMessage>안녕하세요</ConversationMessage>
                {unread && <UnReadBadge>12</UnReadBadge>}
            </Bottom>
      </Right>
    </Container>
  )
}

export default Conversation
