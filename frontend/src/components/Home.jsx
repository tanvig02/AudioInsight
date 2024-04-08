import React from "react";
import img1 from "../images/ai_section2_new1.png";
import img2 from "../images/ai_section2_new2.png";
import img3 from "../images/ai_section2_new3.png";
import { FaMicrophone } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { Link } from "react-router-dom";
const Home = () => {

  return (
    <div className="h-[695px] bg-gray-800 text-gray-300 flex flex-col justify-end align-middle">
      <div className=" m-auto w-[70%] space-y-10">
        <div>
          <h1 className="text-5xl font-extrabold drop-shadow-md shadow-white flex text-center align-bottom pt-12">Speech to Text - Voice Typing & Transcription</h1>
        </div>
        <div className="space-y-5">
          <h3 className="text-center text-xl">Take notes with your voice for free, or automatically transcribe audio & video recordings. Secure, accurate & blazing fast.</h3>
          <div className="text-center space-y-2 ">
            <button className="bg-[#8ed6fb] text-black px-5 py-[10px] rounded-lg w-[200px] text-lg">
              <Link to={"/main"}>Get Stated</Link>
            </button>
            <h1>we Provide ~</h1>
          </div>
        </div>
        <div className="flex justify-around ">
          <div className="border-[1px] border-gray-700 rounded-md w-[350px] h-[280px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 flex flex-col items-center space-y-5 p-10">
            <FaMicrophone className="w-[100px] h-[100px] " />
            <h1 className="font-bold text-3xl text-center">Speech Recogniser</h1>
          </div>
          <div className="border-[1px] border-gray-700 rounded-md w-[350px] h-[280px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 flex flex-col items-center space-y-5 p-10">
            <GrNotes className="w-[100px] h-[100px]" />
            <h1 className="font-bold text-3xl">Summarizer</h1>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
