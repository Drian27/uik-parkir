import React from "react";
import Sidebar from "../components/Sidebar";
import ApexChart from "../components/ApexChart";
import ApexChartCircle from "../components/ApexChartCircle";

// icons
import { FaMotorcycle } from "react-icons/fa6";
import { FaArrowUp, FaCarSide, FaArrowDown, FaRegPlusSquare } from "react-icons/fa";
import Customer from "../components/Customer";

const Dashbord = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-5 w-full flex flex-col">
        <div className="text-white w-full h-14 px-5 py-2 mt-5 p-auto bg-gradient-to-r from-primary to-[#BEDC7CFC] rounded-xl font-semibold">
          <h1 className="text-2xl font-bold">DASHBOARD</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
          <div className="shadow-xl rounded-xl p-5">
            <div className="flex items-center justify-center gap-5">
              <div className="bg-yellow-100 rounded-full p-5">
                <FaMotorcycle className="text-primary text-4xl" />
              </div>
              <div>
                <h2 className="text-3xl font-black">111</h2>
                <p>Motor</p>
                <div className="flex items-center gap-1">
                  <div className="p-2 bg-[#2ED6A326] rounded-full">
                    <FaArrowUp className="text-primary text-xs" />
                  </div>
                  <p>4% (30 days)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded-xl p-5">
            <div className="flex items-center justify-center gap-5">
              <div className="bg-[#2ED6A326] rounded-full p-5">
                <FaCarSide className="text-secondary text-4xl" />
              </div>
              <div>
                <h2 className="text-3xl font-black">111</h2>
                <p>Mobil</p>
                <div className="flex items-center gap-1">
                  <div className="p-2 bg-red-200 rounded-full">
                    <FaArrowDown className="text-red-500 text-xs" />
                  </div>
                  <p>12% (30 days)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded-xl p-5">
            <div className="flex items-center justify-center gap-5">
              <div className="bg-yellow-100 rounded-full p-5">
                <FaRegPlusSquare className="text-primary text-4xl" />
              </div>
              <div>
                <h2 className="text-3xl font-black">111</h2>
                <p>Total</p>
                <div className="flex items-center gap-1">
                  <div className="p-2 bg-red-200 rounded-full">
                    <FaArrowDown className="text-red-500 text-xs" />
                  </div>
                  <p>12% (30 days)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 mt-5">
          <div className="shadow-xl rounded-xl p-5 w-[65%]">
            <ApexChart />
          </div>
          <div className="shadow-xl rounded-xl p-5">
            <ApexChartCircle />
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
