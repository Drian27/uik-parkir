import React from "react";
import Sidebar from "../components/Sidebar";
import ApexChart from "../components/ApexChart";
import ApexChartCircle from "../components/ApexChartCircle";

// icons
import { FaMotorcycle, FaCirclePlus } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import Customer from "../components/Customer";

const Dashbord = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-2 md:px-5 w-[90%] md:w-full flex flex-col">
        <div className="w-full flex items-center justify-between px-5 py-2 bg-primary mt-5 rounded-2xl font-semibold">
          <h1 className="text-xl md:text-2xl font-bold text-white">DASHBOARD</h1>
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
        <div className="container mx-auto mt-10">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-[70%] px-4 mb-4">
              <ApexChart />
            </div>
            <div className="w-full md:w-[30%] px-4 mb-4">
              <ApexChartCircle />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="shadow-xl rounded-xl p-5">
              <div className="flex gap-5 flex-col items-start">
                <div className="bg-yellow-100 rounded-xl p-2">
                  <FaMotorcycle className="text-primary text-5xl" />
                </div>
                <div>
                  <p>Motor Vehicles</p>
                  <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-black">210</h2>
                    <p>Today</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-xl rounded-xl p-5">
              <div className="flex gap-5 flex-col items-start">
                <div className="bg-[#FFF4DE] rounded-xl p-2">
                  <FaCarSide className="text-yellow-300 text-5xl" />
                </div>
                <div>
                  <p>Motor Vehicles</p>
                  <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-black">115</h2>
                    <p>Today</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-xl rounded-xl p-5">
              <div className="flex gap-5 flex-col items-start">
                <div className="bg-green-100 rounded-xl p-2">
                  <FaCirclePlus className="text-primary text-5xl" />
                </div>
                <div>
                  <p>Total Vehicles</p>
                  <div className="flex items-center gap-2">
                    <h2 className="text-3xl font-black">325</h2>
                    <p>Today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white shadow-lg p-5 rounded-lg">
              <p>7 September 2024</p>
              <p className="font-bold mt-5 text-xl">Total Income</p>
              <div className="flex justify-between items-center">
                <p className="text-primary text-5xl font-bold">Rp.2.530.000</p>
                <img
                  src="./assets/img/dashboard/money.png"
                  alt="money"
                  className="w-32"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Customer />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
