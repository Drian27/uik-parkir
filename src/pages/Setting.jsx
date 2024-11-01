import React from "react";
import Sidebar from "../components/Sidebar";

const Setting = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-5 w-full flex flex-col bg-background">
        <div className="w-full flex items-center justify-between px-5 py-2 bg-primary mt-5 rounded-2xl font-semibold">
          <h1 className="text-xl md:text-2xl font-bold text-white">SETTINGS</h1>
          <div className="flex justify-center items-center gap-2">
            <div className="text-end text-white leading-tight">
              <p className="text-xl font-light">Abdul Murudul</p>
              <p className="text-sm font-[800]">Super Admin</p>
            </div>
            <div>
              <img
                src="./assets/img/dashboard/logo-uika.png"
                alt="logo-uika"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
