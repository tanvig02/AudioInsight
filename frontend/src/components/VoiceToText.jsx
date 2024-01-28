import React from "react";
import "../App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState, useEffect } from "react";

const VoiceToText = () => {
  const [message, setMessage] = useState("");
  // const [isCopied, setIsCopied] = useState(false);
  // const [text, setText] = useState("");
  const commands = [
    {
      command: "reset",
      callback: () => resetTranscript(),
    },
    {
      command: "shut up",
      callback: () => setMessage("I wasn't talking."),
    },
    {
      command: "Hello",
      callback: () => setMessage("Hi there!"),
    },
  ];
  const startListening = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IND",
    });
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportSpeechRecognition,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("Got final result:", finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  // const handleCopy = () => {
  //   // navigator.clipboard.writeText(text);
  //   navigator.clipboard.writeText(text).then(() => {
  //     console.log("The text has been copied");
  //   });
  //   setIsCopied(!isCopied);
  //   console.log(text);
  //   console.log(navigator.clipboard);
  // };

  return (
    <>
      <div className="container">
        <h2>Speech to text converter</h2>
        <br />
        {/* <p>hii am tanvi</p> */}
        <span>listening: {listening ? "on" : "off"}</span>

        <div>{message}</div>

        <div className="main-content">{transcript}</div>
        <div className="btn-style">
          {/* <button className="btn-vtt">
            { <span>{isCopied ? "Copied!" : "Copy"}</span> }Copy
          </button> }*/}
          <button className="btn-vtt" onClick={resetTranscript}>
            Reset
          </button>
          <button className="btn-vtt" onClick={startListening}>
            start listening
          </button>
          <button className="btn-vtt" onClick={SpeechRecognition.stopListening}>
            stop listening
          </button>
        </div>
      </div>
      {/* <input
            className="main-content"
            type="text"
            value={}
            onChange={(e) => {
              setText(e.target.value);
            }}
          /> */}
    </>
  );
};

export default VoiceToText;
