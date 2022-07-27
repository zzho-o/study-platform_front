import "./App.css";
import Button from "./Button";
import AppBar from "./AppBar";
import Box from "@mui/material/Box";
import InfoIcon from "@mui/icons-material/Info";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Button variant="outlined">Create</Button>
        <AppBar>menu</AppBar>
        <h2> {name} !</h2>
      </header> */}
      <Home />
    </div>
  );
}

export default App;
