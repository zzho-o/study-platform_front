import React from 'react'
import styled from 'styled-components'
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled.div`
    flex:1;
    padding-left:10px;
    border-right: 0.5px solid rgb(230, 227, 227);
`;

const Wrapper = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;

const Title = styled.p`
    font-size: 10px;
    font-weight: bold;
    color:#999;
    margin-top: 15px;
    margin-bottom: 5px;
`;

const List = styled.li`
    display: flex;
    align-items: center;
    padding: 5px;
    cursor:pointer;

    &:hover{
        background-color:#ece8ff;
    }
`;

const Name = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #888;
    margin-left: 10px;
`;

const Icon = styled.div`
    color:#7451f8;
    ${(props) => props.user === true && `
        color:gray;
    `}
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
          <Title>MAIN</Title>
          <List>
              <Icon>
                <DashboardIcon/>
              </Icon>
              <Name>메인
              </Name>
          </List>
        
          <Title>MENU</Title>
          <List>
              <Icon>
                <ChatIcon/>
              </Icon>
              <Name>채팅</Name>
          </List>

          <List>
              <Icon>
              <CalendarMonthIcon /></Icon>
              <Name>캘린더</Name>
          </List>


          <List>
              <Icon>
              <VideoCameraFrontIcon />
              </Icon>
              <Name>화상회의</Name>
          </List>
          <List>
              <Icon>
              <SettingsIcon />
              </Icon>
              <Name>설정</Name>
          </List>
      </Wrapper>
    </Container>
  )
}

export default Sidebar
