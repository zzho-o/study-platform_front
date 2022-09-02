import "./App.css";
import Home from "./Home";
import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Mypage from "./MyPage";
import OnlineMeeting from "./OnlineMeeting/OnlineMeeting";
import Chat from "./Chat/Chat";
import Redirect from "./Redirect";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/openvidu" element={<OnlineMeeting />} />

        {/* <header className="App-header">
        <Button variant="outlined">Create</Button>
        <AppBar>menu</AppBar>
        <h2> {name} !</h2>
      </header> */}
        <Route path="/" element={<Home />} />
        <Route path="/Redirect" element={<Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
