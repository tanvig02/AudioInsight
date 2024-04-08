import React, { useState, useEffect } from "react";
import "../App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Axios from "axios";
import { BiCloudUpload } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoMicCircleSharp, IoMicOffCircle } from "react-icons/io5";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import AudioUpload from "./AudioUpload";

const VoiceToText = () => {
  const [summary, setSummary] = useState("");
  const [text, setText] = useState("");

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
  } = useSpeechRecognition();

  // useEffect(() => {
  //   if (finalTranscript !== "") {
  //     console.log("Got final result:", finalTranscript);
  //   }
  // }, [interimTranscript, finalTranscript]);
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

  const handleSubmit = async () => {
    setText(transcript);
    //post transcript
    Axios.post("http://localhost:5000/text", {
      text,
    })
      .then((res) => {
        console.log(res.data);
        if (res.status === 1) {
          alert("Text send");
        }
      })
      .catch((error) => {
        console.log("error fetching data: ", error);
      });

    //get status (sent or not)
    // let response = await fetch("http://localhost:5000/text", {
    //   method: "get",
    // });
    // let res = await Axios.get("http://localhost:5000/text")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log("error fetxhing data:", error);
    //   });
    //  response.json();
  };

  const uploadFile2 = async (e)=>{
    try{
      const headers = {
        "content-type": "multipart/form-data",
      };
      
      const file = e.target.files[0];
      console.log(file)
      if(file!= null){
        const formData = new FormData();
        formData.append("file_from_react", file);
        
        console.log(formData);
        const resp = await Axios
          .post("http://localhost:5000/audio", formData , { headers });
        
          if(resp.status===200){
            alert("file uploaded!!");
          }
          console.log(resp)
      }
    }catch(error){
      if(error.response.status === 401){
        alert("File not uploaded")
      }
    }
    
  }

  return (
    <>
    <div className="h-[690px] bg-gray-800 text-gray-300 flex flex-col justify-center items-center">
      <div className="w-[75%] border-[1px] border-slate-400 rounded-md h-[450px] p-5">
        <div>listening: {listening ? "on" : "off"}</div>
        <div className="flex bg-slate-400 text-black rounded-md h-[330px] relative">
          {listening ? <button onClick={SpeechRecognition.stopListening} > <IoMicCircleSharp className="w-14 h-14 absolute bottom-5 left-5 text-blue-700 hover:text-blue-900 cursor-pointer " /></button> : <button onClick={startListening}> <IoMicOffCircle className="w-14 h-14 absolute bottom-5 left-5 text-blue-700 hover:text-blue-900 cursor-pointer "  /> </button> }
          <button onClick={resetTranscript}> <MdOutlineWifiProtectedSetup  className="w-14 h-14 absolute bottom-5 left-20 text-blue-700 hover:text-blue-900 cursor-pointer "  /> </button>
          
          {/* Text */}
          <div className="w-[50%] border-r border-black p-5">
          {transcript}
           {/* text here */}
          </div>
          <div className="w-[50%] p-5">
            {/* summary */}
          </div>
        </div>
        <div className="flex justify-between align-middle w-[30%] text-lg text-center font-semibold">
          <div className="flex px-3 py-[7px] "> 
            <BiCloudUpload className="w-12 h-12" />
            <input className="pt-2" type="file" onChange={uploadFile2}/>
          </div>
          <div className="flex px-3 py-[7px] mt-3 border-[1px] border-slate-100 rounded-xl hover:bg-slate-500">
              <button onClick={handleSubmit}>
                Summarize
              </button>
              <FaArrowAltCircleRight className="w-10 h-8"/>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default VoiceToText;
