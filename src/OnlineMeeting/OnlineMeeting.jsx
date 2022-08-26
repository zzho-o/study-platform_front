import {Component} from "react";
import {OpenVidu} from 'openvidu-browser';
import axios from "axios";
import styled from 'styled-components';
import UserVideoComponent from './UserVideoComponent';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import HeadsetIcon from '@mui/icons-material/Headset';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import MicOffIcon from '@mui/icons-material/MicOff';
import HeadsetOffIcon from '@mui/icons-material/HeadsetOff';

// 로컬 미디어 서버 주소
const OPENVIDU_SERVER_URL = "https://" + window.location.hostname + ":4443";
const OPENVIDU_SERVER_SECRET = "MY_SECRET"

const Container = styled.div `
    height: 100vh;
    width: 100%;
    background-color: #202124;
`;

const Header = styled.div `
    height: 8vh;
    display: flex;
    align-items: center;
    padding:0 50px;
    justify-content: space-between;
`;

const StudyTitle = styled.p `
color:white;
font-weight: 500;
font-size: 25px;
`;

const ExitButton = styled.button `
    background-color: crimson;
    color: white;
    border-radius: 5px;
    width: 70px;
    height:35px;
    border:none;
    padding: 5px;
    cursor:pointer;
    font-weight: 700;
    &:hover{
        background-color: #e03d5e;
    }
`;

const VideoWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
`;

const VideoContainer = styled.div`
width:94%;
height:75vh;
overflow: hidden;
`;

const StreamContainerWrapper = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    height: 70vh;
    padding: 10px;
  @media screen and (max-width:800px) {
      background-color: red;
  }
`;

const StreamContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    border-radius: 5px;
    min-height: 35vh;
    overflow: hidden;
`;

const Bottom = styled.div`
    height:17vh;
    display:flex;
    justify-content: center;
`;

const BottomBox = styled.div`
    display:flex;
    height:100%;
    width:15%;
    align-items: center;
    justify-content: space-around;
`;

const Icon = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height:50px;
    border-radius: 50%;
    background-color: #333;
    color:white;
    cursor:pointer;
    transition:.2s;
    &:hover{
        background-color:#3C4043;
    }
`;


class OnlineMeeting extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <StudyTitle>
                        Java Study
                    </StudyTitle>

                    <ExitButton>
                        나가기
                    </ExitButton>
                </Header>
                <VideoWrapper>
                    <VideoContainer>
                        <StreamContainerWrapper>
                        {
                            this.state.publisher !== undefined
                                ? (
                                    <StreamContainer
                                        onClick={() => this.handleMainVideoStream(this.state.publisher)}>
                                        <UserVideoComponent streamManager={this.state.publisher}/>
                                    </StreamContainer>
                                )
                                : null
                        }
                        {
                            this
                                .state
                                .subscribers
                                .map((sub, i) => (
                                    <StreamContainer
                                        key={i}
                                        onClick={() => this.handleMainVideoStream(sub)}>
                                        <UserVideoComponent streamManager={sub}/>
                                    </StreamContainer>
                                ))
                        }
                        </StreamContainerWrapper>
                    </VideoContainer>
                </VideoWrapper>

                <Bottom>
                    <BottomBox>
                        <Icon onClick={() => this.setState({isCamera:!this.state.isCamera})}>
                            {this.state.isCamera ? <VideocamOutlinedIcon /> : <VideocamOffOutlinedIcon />}
                        </Icon>

                        <Icon onClick={() => this.setState({isMike:!this.state.isMike})}>
                            {this.state.isMike ? <MicOutlinedIcon /> : <MicOffIcon />}
                        </Icon>

                        <Icon onClick={() => this.setState({isSpeaker:!this.state.isSpeaker})}>
                            {this.state.isSpeaker ? <HeadsetIcon /> : <HeadsetOffIcon />}
                        </Icon>
                    </BottomBox>
                </Bottom>
            </Container>
        )
    }

    constructor(props) {
        super(props);

        this.state = {
            mySessionId:'SessionA',
            myUserName: 'Participant' + Math.floor(Math.random() * 100),
            session: undefined,
            mainStreamManager: undefined,
            publisher: undefined, // 로컬 웹캠 스트림
            subscribers: [], // 다른 사용자의 활성 스트림
            isMike: true,
            isCamera: true,
            isSpeaker: true,
        };

        this.joinSession = this
            .joinSession
            .bind(this);
        this.leaveSession = this
            .leaveSession
            .bind(this);
        this.handleMainVideoStream = this
            .handleMainVideoStream
            .bind(this);
        this.onbeforeunload = this
            .onbeforeunload
            .bind(this);
    }

    componentDidMount() {
        // this.leaveSession();
        window.addEventListener('beforeunload', this.onbeforeunload);
        this.joinSession();
        // 스터디방에서 화상회의 입장 -> props로 roomId로 받으면 세션id 업뎃 user 정보 전역변수 가져옴 -> 상태값 업뎃
    }

    onbeforeunload(e) {
        this.leaveSession();
    }

    // 화상회의 나갈때
    leaveSession() {
        const mySession = this.state.session;

        if (mySession) {
            mySession.disconnect();
        }

        this.OV = null;
        this.setState({
            session: undefined,
            subscribers: [],
            mySessionId: undefined,
            myUserName: undefined,
            mainStreamManager: undefined,
            publisher: undefined
        });
    }

    deleteSubscriber(streamManager) {
        let subscribers = this.state.subscribers;
        let index = subscribers.indexOf(streamManager, 0);
        if (index > -1) {
            subscribers.splice(index, 1);
            this.setState({subscribers: subscribers});
        }
    }

    handleMainVideoStream(stream) {
        if (this.state.mainStreamManager !== stream) {
            this.setState({mainStreamManager: stream});
        }
    }

    joinSession() {
        this.OV = new OpenVidu(); // OpenVidu 객체를 얻음

        this.setState({
            session: this
                .OV
                .initSession()
        }, () => {
            let mySession = this.state.session;

            // Session 객체가 각각 새로운 stream에 대해 구독 후, subscribers 상태값 업뎃
            mySession.on('streamCreated', (e) => {
                // OpenVidu -> Session -> 102번째 줄 확인 UserVideoComponent를 사용하기 때문에 2번째 인자로 HTML
                // 요소 삽입X
                let subscriber = mySession.subscribe(e.stream, undefined);
                var subscribers = this.state.subscribers;
                subscribers.push(subscriber);

                this.setState({subscribers});
            });

            // 사용자가 화상회의를 떠나면 Session 객체에서 소멸된 stream을 받아와 subscribers 상태값 업뎃
            mySession.on('streamDestroyed', (e) => {
                this.deleteSubscriber(e.stream.streamManager);
            });

            // 서버 측에서 비동기식 오류 발생 시 Session 객체에 의해 트리거되는 이벤트
            mySession.on('exception', (exception) => {
                console.warn(exception);
            });

            this
                .getToken()
                .then((token) => {
                    mySession
                        .connect(token, {
                            clientData: this.state.myUserName
                        },)
                        .then(async () => {
                            let publisher = this
                                .OV
                                .initPublisher(undefined, {
                                    audioSource: undefined,
                                    videoSource: undefined, // 웹캠 기본 값으로
                                    publishAudio: true,
                                    publishVideo: true,
                                    resolution: '640x480',
                                    frameRate: 30,
                                    insertMode: 'APPEND',
                                    mirror: 'false'
                                });

                            mySession.publish(publisher);

                            this.setState({mainStreamManager: publisher, publisher});
                        })
                        .catch((error) => {
                            console.log("세션 연결 오류", error.code, error.message);
                        });
                })
        })
    }

    getToken() {
        return this
            .createSession(this.state.mySessionId)
            .then((sessionId) => this.createToken(sessionId));
    }

    createSession(sessionId) {
        return new Promise((resolve, reject) => {
            let data = JSON.stringify({customSessionId: sessionId});

            axios
                .post(OPENVIDU_SERVER_URL + "/openvidu/api/sessions", data, {
                    headers: {
                        Authorization: `Basic ${btoa(`OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`)}`,
                        'Content-Type': 'application/json'
                    }
                })
                .then((res) => {
                    resolve(res.data.id);
                })
                .catch((res) => {
                    let error = Object.assign({}, res);

                    if (
                        error
                            ?.response
                                ?.status === 409
                    ) {
                        resolve(sessionId);
                    } else if (window.confirm(
                        'No connection to OpenVidu Server. This may be a certificate error at "' +
                                OPENVIDU_SERVER_URL + '"\n\nClick OK to navigate and accept it. If no certifica' +
                                'te warning is shown, then check that your OpenVidu Server is up and running at' +
                                ' "' + OPENVIDU_SERVER_URL + '"',
                    )) {
                        window
                            .location
                            .assign(OPENVIDU_SERVER_URL + '/accept-certificate');
                    }
                })
            })
    }

    createToken(sessionId) {
        return new Promise((resolve, reject) => {
            let data = {};

            axios
                .post(
                    `${OPENVIDU_SERVER_URL}/openvidu/api/sessions/${sessionId}/connection`,
                    data,
                    {
                        headers: {
                            Authorization: `Basic ${btoa(`OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`)}`,
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then((res) => {
                    resolve(res.data.token);
                })
                .catch((error) => reject(error));
        })
    }

}

export default OnlineMeeting;