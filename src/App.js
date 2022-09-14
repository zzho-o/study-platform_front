import "./App.css";
import Home from "./Home";
import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Mypage from "./MyPage";
import OnlineMeeting from "./OnlineMeeting/OnlineMeeting";
import Chat from "./Chat/Chat";
import Redirect from "./Redirect";
import MyPage from "./MyPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Study from "./study/Study";
import StudyChat from "./study/StudyChat";
import StudyCalendar from "./study/StudyCalendar";
import Personnel from "./personnel/Personnel";
import CreateStudy from "./CreateStudy";
import Calendar from "./calendar/Calendar";
import A from "./modules/views/StudyObject";
import Search from "./modules/views/Search";
import SubjectSearch from "./modules/views/SubjectSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/openvidu" element={<OnlineMeeting />} />
        <Route path="/CreateStudy" element={<CreateStudy />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/SubjectSearch" element={<SubjectSearch />} />
        <Route path="/" element={<Home />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Personnel" element={<Personnel />} />
        <Route path="/Redirect" element={<Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
