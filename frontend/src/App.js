import Navbar from "./components/Navbar";
import VoiceToText from "./components/VoiceToText";
import AudioUpload from "./components/AudioUpload";

import styles from "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <VoiceToText />
      <AudioUpload />
    </>
  );
}

export default App;
