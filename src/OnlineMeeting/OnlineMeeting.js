import {Component} from "react";
import {OpenVidu} from 'openvidu-browser';
import axios from "axios";

// 로컬 미디어 서버 주소
const OPENVIDU_SERVER_URL = "https://" + window.location.hostname + ":4443";
const OPENVIDU_SERVER_SECRET = "STUDY_FLATFORM"

class OnlineMeeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mySessionId: undefined,
            myUserName: undefined,
            session: undefined,
            mainStreamManager: undefined,
            publisher: undefined, // 로컬 웹캠 스트림
            subscribers: [], // 다른 사용자의 활성 스트림
        };
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.onbeforeunload);

        // 스터디방에서 화상회의 입장 -> props로 roomId로 받으면 세션id 업뎃 
        // user 정보 전역변수 가져옴 -> 상태값 업뎃
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
                        .connect(
                            token, 
                            {clientData: this.state.myUserName},
                        )
                        .then(async () => {
                            let publisher = this.OV.initPublisher(undefined, {
                                audioSource: undefined, 
                                videoSource: undefined, // 웹캠 기본 값으로
                                publishAudio: true, 
                                publishVideo: true,
                                resolution: '640x480',
                                frameRate: 30,
                                insertMode: 'APPEND',
                                mirror: 'false',
                            });

                            mySession.publish(publisher);

                            this.setState({
                                mainStreamManager: publisher,
                                publisher,
                            });
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