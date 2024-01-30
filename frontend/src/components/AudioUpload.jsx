import React, { useState, useEffect } from "react";
import Axios from "axios";

var a;
const AudioUpload = () => {
  const [buttonName, setButtonName] = useState("Play");

  const [audio, setAudio] = useState();

  useEffect(() => {
    if (a) {
      a.pause();
      a = null;
      setButtonName("Play");
    }
    if (audio) {
      a = new Audio(audio);
      a.onended = () => {
        setButtonName("Play");
      };
    }
  }, [audio]);

  const PlayAudio = () => {
    if (buttonName === "Play") {
      a.play();
      setButtonName("Pause");
    } else {
      a.pause();
      setButtonName("Play");
    }
  };

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if (file != null) {
      const data = new FormData();
      data.append("file_from_react", file);

      // console.log(file);
      // console.log(data);
      console.log("done");

      let response = await fetch("http://localhost:5000/audio", {
        method: "post",
        body: data,
      });
      let res = await response.json();
      if (res.status != 1) {
        alert("Error uploading file");
      }
    }
  };

  // const url = "http://localhost:5000/profile";

  // const submit = async (e) => {
  //   e.preventDefault();
  // Axios.post(url, {
  //   name,
  // }).then((res) => {
  //   console.log(res.data);
  // });
  // let response = await fetch("http://localhost:5000/audio", {
  //   method: "post",
  //   body: data,
  // });
  //   let res = await response.json();
  //   if (res.status != 1) {
  //     alert("Error uploading file");
  //   }
  // };

  // const [message, setMessage] = useState("");
  // const [message2, setMessage2] = useState("");
  // useEffect(() => {
  //   Axios.get(url)
  //     .then((res) => {
  //       console.log(res);
  //       setMessage(res.data.name);
  //       console.log(message);
  //       setMessage2(res.data.share);
  //       console.log(message2);
  //     })
  //     .catch((error) => {
  //       console.log("error fetxhing data:", error);
  //     });
  // }, []);

  return (
    <>
      <div className="w-full">
        <div className="max-w-[1240px] xl:mx-auto mx-10">
          <div>
            {" "}
            <button
              className="p-4 m-2 bg-gray-500 text-white font-bold text-xl rounded-full "
              onClick={PlayAudio}
            >
              ▶{buttonName}
            </button>
            <input
              type="file"
              onChange={addFile}
              className="w-[400px] border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:bg-gray-100 file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
            />
          </div>
          <div className="m-auto">
            <form
            // onSubmit={(e) => {
            //   submit(e);
            // }}
            >
              <label className="sr-only">Choose file</label>
              <input
                type="file"
                onChange={uploadFile}
                className="block w-[400px] border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:bg-gray-100 file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
              />
              {/* <button onClick={submit}>Submit</button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioUpload;
