import {BrowserRouter,Routes, Route} from "react-router-dom"
import axios from "axios"
import Navbar from "./components/Navbar";
import VoiceToText from "./components/VoiceToText";
import Voice from "./components/Voice";
import AudioUpload from "./components/AudioUpload";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Protected from "./components/Protected";
import styles from "./index.css";

// axios.create({
//   withCredentials: true
// }) <Route path="/resume" element={<Protected Component={Resume} />} />

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/main" element={<Protected Component={VoiceToText}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
