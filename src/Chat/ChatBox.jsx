import React, { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Message from './Message';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

import SockJS from "sockjs-client";
import Stomp from "stompjs";
import styled from 'styled-components';

const Container = styled.div`
    flex: 6;
`;

const ChatBoxWrapper = styled.div`
    padding:10px 20px;
    height:100%;
    display: flex;
    flex-direction: column;
    `;

const ChatBoxTop = styled.div`
    height:100%;
    overflow-y: scroll;
    padding-right: 10px;
    `;

const ChatBoxBottom = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:relative;
    `;

const ChatMessageInput = styled.textarea`
    width: 80%;
    height: 50px;
    padding: 10px;
    margin-bottom: 5%;
    `;

const ChatSubmitButton = styled.button`
    width: 70px;
    height: 40px;
    border:none;
    border-radius:5px;
    cursor:pointer;
    background-color: #FAE57C;
    `;

const FileUpload = styled.div`
    cursor:pointer;
    position:absolute;
    bottom:0;
    left:1%;    
    color: gray;
`;


const ChatBox = () => {
    const scrollRef = useRef();
    const ws = useRef();
    const params = useParams();
    const roomId = params.id;

    // 소켓 연결
    useEffect(() => {
        let sock = new SockJS(`${process.env.REACT_APP_BASE_URL}/stomp/chat`);
        let client = Stomp.over(sock);
        ws.current = client;

        console.log(client);

        ws.current.connect({}, () => {
            ws.current.subscribe(`/sub/chat/room/${roomId}`, (res) => {
                const message = JSON.parse(res.body);
                
            });
        })
    }, [roomId]);

  return (
    <Container>
    <ChatBoxWrapper>
        <ChatBoxTop>
            <div ref={scrollRef}>
                <Message me={false}/>
                <Message me={true}/>
                <Message me={false}/>
                <Message me={true}/>
                <Message me={false}/>
                <Message me={false}/>
                <Message me={false}/>
                <Message me={false}/>
                <Message me={false}/>
                <Message me={false}/>
                <Message me={false}/>
                <Message me={false}/>
                <Message me={false}/>
                <Message me={false}/>
                <Message me={false}/>
                <Message me={false}/>
            </div>
        </ChatBoxTop>

        <ChatBoxBottom>
            <ChatMessageInput></ChatMessageInput>
            <ChatSubmitButton>전송</ChatSubmitButton>
            <label for="file">
                <FileUpload><AttachFileOutlinedIcon style={{"fontSize":"22px"}} /></FileUpload>
            </label>
            <input style={{"display":"none"}} type="file" name="file" id="file" />
        </ChatBoxBottom>
    </ChatBoxWrapper>
</Container>
  )
}

export default ChatBox
