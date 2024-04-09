import React, { useState } from "react";
import "../App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Axios from "axios";
import { BiCloudUpload } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoMicCircleSharp, IoMicOffCircle } from "react-icons/io5";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
// import AudioUpload from "./AudioUpload";

const VoiceToText = () => {
  // const [summary, setSummary] = useState("");
  const [text, setText] = useState("");
  const [audio, setAudio] = useState();
  const [audiobtn, setAudioBtn] = useState(true)

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

  const clearText=()=>{
    setText("")
  }

  const handleSubmit = async () => {
    setText(transcript);
    console.log(text)
    //post transcript
    Axios.post("http://localhost:5000/text", {
      text,
    })
      .then((res) => {
        console.log(res.data);
        if (res.status === 1) {
          window.alert("Text send");
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
      
      const formData = new FormData();
      formData.append("react_file", audio);
      console.log(formData)
      const resp = await Axios.post("http://localhost:5000/audio", formData , { headers:{
        "Custom-Header": "value",
        "Content-type": "multipart/form-data",
      }});
      
        if(resp.status===200){
          alert("file uploaded!!");
        }
        console.log(resp)
      
    }catch(error){
      if(error.response && error.response.status === 401 ){
        alert("File not uploaded")
      }else{
        console.log("error in file uploading: ", error)
      }
    }
  }

  // const [myFile, setMyFile] = useState(null);
  // const [progress, setProgress] = useState({started: false, pc:0});
  // const [msg, setMsg] = useState("");

  // const handleUpload=()=>{
  //   if(!myFile){
  //     console.log("no file");
  //   }

  //   const fd = new FormData();
  //   fd.append("file_from_react", myFile);

  //   setProgress(prevState=>{
  //     return {...prevState, started: true}
  //   })
  //   setMsg("Uploading...");
  //   Axios.post('http://localhost:5000/audio', fd, {
  //     onUploadProgress: (progressEvent)=>{setProgress(prevState=>{
  //       return {...prevState, pc:progressEvent.progress*100}
  //     })},
  //       headers:{
  //         "Custom-Header": "value",
  //       }
  //   }).then(res => {
  //     setMsg("Upload Successfully")
  //     console.log(res.data)
  //   })
  //   .catch(err => {
  //     setMsg("Upload Failed")
  //     console.log(err)
  //   });

  // }

  return (
    <>
    <div className="h-[700px] bg-gray-800 text-gray-300 flex flex-col justify-center items-center">
      <div className="w-[75%] border-[1px] border-slate-400 rounded-md h-[500px] p-5">
        <div className="text-slate-200 space-x-3 "><button onClick={()=>setAudioBtn(true)} className="border-[1px]  border-white p-2 rounded-sm">Audio</button><button className="border-[1px] border-white p-2 rounded-sm bg-slate-200 text-slate-700" onClick={()=>setAudioBtn(false)}>text</button></div>
        {audiobtn===true? <div>listening: {listening ? "on" : "off"}</div>: <div></div>}
        
        <div className="flex bg-slate-400 text-black rounded-md h-[330px] relative">
         { audiobtn===false ?<div></div>
          :  <div>
          {listening ? <button onClick={SpeechRecognition.stopListening} > <IoMicCircleSharp className="w-14 h-14 absolute bottom-5 left-5 text-blue-700 hover:text-blue-900 cursor-pointer " /></button> : <button onClick={startListening}> <IoMicOffCircle className="w-14 h-14 absolute bottom-5 left-5 text-blue-700 hover:text-blue-900 cursor-pointer "  /> </button> } 
          </div>
          }
          <button onClick={() => { resetTranscript(); clearText();}}> <MdOutlineWifiProtectedSetup  className="w-14 h-14 absolute bottom-5 left-20 text-blue-700 hover:text-blue-900 cursor-pointer "  /> </button> 
          
          
          {/* Text */}
          { audiobtn?<div data-text="you can speek..." className="w-[50%] bg-slate-400 border-r border-black p-5">{transcript}</div>
          :
          <textarea placeholder="you can type here..." className="w-[50%] bg-slate-400 border-r border-black p-5" value={text} onChange={(e)=>{setText(e.target.value)}}/>
          }

          <div className="w-[50%] p-5">
            {/* summary */}
          </div>
        </div>
        <div className="flex justify-between align-middle w-[30%] pt-3 text-sm text-center font-semibold">
          <div className="flex px-3 py-[7px] "> 
            <BiCloudUpload className="w-12 h-12" />
            <input className="pt-2" type="file" onChange={(e)=>{setAudio(e.target.files[0])}}/>
            {/* <input className="pt-2" onChange={(e)=>{setMyFile(e.target.files[0])}} type="file"/> */}
            {/* <button onClick={handleUpload} >Upload</button> */}
          </div>
          <div className="flex p-2 border-[1px] border-slate-100 rounded-xl hover:bg-slate-500">
              <button onClick={handleSubmit}>
                Summarize Text
              </button>
              <FaArrowAltCircleRight className="w-8 h-6"/>
          </div>
          <div className="flex p-2 border-[1px] border-slate-100 rounded-xl hover:bg-slate-500">
              <button onClick={uploadFile2}>
                Summarize Audio
              </button>
              <FaArrowAltCircleRight className="w-8 h-6"/>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default VoiceToText;
