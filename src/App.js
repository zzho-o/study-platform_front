import "./App.css";
import Home from "./Home";
import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Mypage from "./MyPage";
import OnlineMeeting from "./OnlineMeeting/OnlineMeeting";
import Chat from "./Chat/Chat";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Button variant="outlined">Create</Button>
        <AppBar>menu</AppBar>
        <h2> {name} !</h2>
      </header> */}
      {/* <Home /> */}
      <Chat />
      {/* <Mypage /> */}
    </div>
  );
}

export default App;
