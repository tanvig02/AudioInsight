import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col h-[80px] shadow-lg">
      <div className="bg-white flex justify-between items-center p-4">
        <h1 className="text-lg font-bold text-gray-800">audioInsight</h1>
        <div className="space-x-2">
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
            Login
          </button>
          <button className="text-blue-800 font-semibold py-2 px-4 rounded border ">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
