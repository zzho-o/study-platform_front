import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    ${(props) => props.me === true && `
        align-items: flex-end;
    `}
`;

const MessageTop = styled.div`
    display: flex;
`;

const MessageBottom = styled.div`
    font-size: 12px;
    margin-top: 10px; 
`;

const MessageImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit:cover;
    margin-right: 10px;

    ${(props) => props.me === true && `
        display:none;
    `}
`;

const MessageText = styled.p`
    padding: 10px;
    border-radius: 20px;
    background-color: #f3f3f3;
    max-width: 300px;
    color: #202020;
    font-size: 14px;

    ${(props) => props.me === true && `
        background-color:#FAE57C;
    `}
`;

const Message = ({me}) => {
  return (
    <Container me={me}>
      <MessageTop>
        <MessageImage me={me} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9CpA4I6pOTcI6CNL9vo0T_hUU_xreMcfA2ZTUmH4NuQ0TmwlqquuJdE88LbOBR3zQyE&usqp=CAU" alt=""></MessageImage>
        <MessageText me={me}>안녕하세요 저는 백엔드 개발자입니다. 만나서 반갑습니다 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ</MessageText>
      </MessageTop>

      <MessageBottom>
        1시간전
      </MessageBottom>
    </Container>
  )
}

export default Message
