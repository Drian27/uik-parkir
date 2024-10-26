import React from "react";
import Sidebar from "../components/Sidebar";

const Setting = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-5 w-full flex flex-col">
        <div className="w-full flex items-center justify-between px-5 py-2 bg-primary mt-5 rounded-2xl font-semibold">
          <h1 className="text-xl md:text-2xl font-bold text-white">SETTING</h1>
        </div>
      </div>
    </div>
  );
};

export default Setting;
