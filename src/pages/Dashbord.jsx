import React from "react";
import Sidebar from "../components/Sidebar";

const Dashbord = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashbord;
