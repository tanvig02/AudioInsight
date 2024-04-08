import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );


   //redirecting
   useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/main");
    }
    console.log("login useEffect");
  });

  const loginUser = async()=>{
    if(email.length===0){
      alert("Email has left Blank!");
    }
    else if(password.length===0){
      alert("Password has left Blank!");
    }
    else{
      try{
        
        console.log(email, password)
        // const userData = JSON.stringify({email:email,
        //   password:password});

        const config = {
          headers: {
            "Content-type": "application/json",
            withCredentials: true,
          },
        };

        const resp = await axios.post("http://localhost:5000/login", {
          email,
          password,
        }, config
        );

        if(resp.status==200){
          alert("User Logged In successfully")
          // window.location.href="/main"
          localStorage.setItem("authenticated", true);
          navigate("/");
          localStorage.setItem("login", true);
          navigate("/");

        }
        console.log(resp)

      }catch(error){
        if(error.response.status === 401){
          alert("Invalid credentials")
        }
      }
    }
  }

  return (
    <>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }} name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button onClick={loginUser} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login in</button>
      </div>
    </div>

    <p className="mt-10 text-center text-sm text-gray-500">
      Don't have account?
      <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</a>
    </p>
  </div>
</div>
</>
  )
}

export default Login