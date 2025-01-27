import React from "react";
import Sidebar from "../components/Sidebar";

import ButtonLogOut from "../components/ButtonLogOut";

const SettingAdmin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-5 w-full flex flex-col bg-background">
        <div className="w-full flex items-center justify-between px-5 py-1 md:py-2 bg-primary mt-5 rounded-2xl font-semibold">
          <div className="flex justify-center items-center gap-2">
            <div>
              <img
                src="../assets/img/dashboard/logo-uika.png"
                alt="logo-uika"
              />
            </div>
            <div className="text-white leading-tight">
              <p className="md:text-xl font-light">Abdul Murudul</p>
              <p className="md:text-sm text-xs font-[800]">Super Admin</p>
            </div>
          </div>
          <h1 className="text-sm md:text-2xl font-bold text-white">SETTING</h1>
          <ButtonLogOut />
        </div>
      </div>
    </div>
  );
};

export default SettingAdmin;
