import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex flex-col h-[70px] shadow-lg sticky top-0 z-50 px-7 bg-gray-800 shadow-slate-400 drop-shadow-2xl">
      <div className=" flex justify-between items-center p-4 ">
      <Link to={"/"} className="text-lg font-bold text-slate-200">audioInsight</Link>
        <div className="space-x-2">
          <Link to={"/login"}>
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
            Login
          </button>
          </Link>
          <Link to={"/register"}>
          <button className="text-blue-400  font-semibold py-2 px-4 rounded border ">
            Register
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
