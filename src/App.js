import "./App.css";
import Home from "./Home";
import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Mypage from "./MyPage";
import OnlineMeeting from "./OnlineMeeting/OnlineMeeting";
import Chat from "./Chat/Chat";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat/:id" element={<Chat/>} />
      {/* <header className="App-header">
        <Button variant="outlined">Create</Button>
        <AppBar>menu</AppBar>
        <h2> {name} !</h2>
      </header> */}
<<<<<<< HEAD
      <Home />
      {/* <Chat /> */}
=======
      {/* <Home /> */}
>>>>>>> 1ad7237fd9b5e0f18ae653cee148048103a12320
      {/* <Mypage /> */}
    </Routes>
    </Router>
  );
}

export default App;
