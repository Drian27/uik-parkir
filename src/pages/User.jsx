import React from "react";
import Sidebar from "../components/Sidebar";

const User = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-5 w-full flex flex-col">
        <div className="w-full flex items-center justify-between px-5 py-2 bg-primary mt-5 rounded-2xl font-semibold">
          <h1 className="text-xl md:text-2xl font-bold text-white">USER</h1>
        </div>
      </div>
    </div>
  );
};

export default User;
