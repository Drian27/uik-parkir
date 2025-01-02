import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ApexChart from "../components/ApexChart";
import ApexChartCircle from "../components/ApexChartCircle";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css";

// icons
import { FaMotorcycle, FaCirclePlus, FaCarSide } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";

import Customer from "../components/Customer";
import ButtonLogOut from "../components/ButtonLogOut";

const Dashbord = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Helper function to set predefined date ranges
  const setPredefinedRange = (type) => {
    const today = new Date();
    let startDate, endDate;

    switch (type) {
      case "today":
        startDate = endDate = today;
        break;
      case "yesterday":
        startDate = endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
        break;
      case "thisWeek":
        const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
        startDate = firstDayOfWeek;
        endDate = new Date(
          firstDayOfWeek.getFullYear(),
          firstDayOfWeek.getMonth(),
          firstDayOfWeek.getDate() + 6
        );
        break;
      case "lastWeek":
        const lastWeekStart = new Date(today.setDate(today.getDate() - today.getDay() - 7));
        startDate = lastWeekStart;
        endDate = new Date(
          lastWeekStart.getFullYear(),
          lastWeekStart.getMonth(),
          lastWeekStart.getDate() + 6
        );
        break;
      case "thisMonth":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case "lastMonth":
        startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        endDate = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      default:
        startDate = endDate = today;
    }

    setDateRange([{ startDate, endDate, key: "selection" }]);
  };

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="px-2 md:px-5 w-[90%] md:w-full flex flex-col bg-background">
        {/* Header */}
        <div className="w-full flex items-center justify-between px-5 py-1 md:py-2 bg-primary mt-5 rounded-2xl font-semibold">
          <div className="flex justify-center items-center gap-2">
            <div>
              <img
                src="./assets/img/dashboard/logo-uika.png"
                alt="logo-uika"
              />
            </div>
            <div className="text-white leading-tight">
              <p className="md:text-xl font-light">Abdul Murudul</p>
              <p className="md:text-sm text-xs font-[800]">Super Admin</p>
            </div>
          </div>
          <h1 className="text-sm md:text-2xl font-bold text-white">DASHBOARD</h1>
          <ButtonLogOut />
        </div>
        <div className="relative">
          <button
            onClick={() => setFilterVisible(!filterVisible)}
            className="bg-primary text-white my-3 px-4 py-2 rounded-lg shadow-md flex justify-center items-center gap-2"
          >
            <IoFilter className="text-2xl" />
            <p className="text-xl">Filter</p>
          </button>

          {filterVisible && (
            <div className="absolute top-15 left-0 bg-white shadow-lg rounded-lg p-4 z-50">
              <div className="flex gap-4">
                <div className="flex flex-col gap-2">
                  <button
                    className="bg-gray-100 text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                    onClick={() => setPredefinedRange("today")}
                  >
                    Today
                  </button>
                  <button
                    className="bg-gray-100 text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                    onClick={() => setPredefinedRange("yesterday")}
                  >
                    Yesterday
                  </button>
                  <button
                    className="bg-gray-100 text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                    onClick={() => setPredefinedRange("thisWeek")}
                  >
                    This Week
                  </button>
                  <button
                    className="bg-gray-100 text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                    onClick={() => setPredefinedRange("lastWeek")}
                  >
                    Last Week
                  </button>
                  <button
                    className="bg-gray-100 text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                    onClick={() => setPredefinedRange("thisMonth")}
                  >
                    This Month
                  </button>
                  <button
                    className="bg-gray-100 text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                    onClick={() => setPredefinedRange("lastMonth")}
                  >
                    Last Month
                  </button>
                  <div className="flex justify-center">
                    <img
                      src="./assets/img/dashboard/logo-uika.png"
                      alt="logo"
                    />
                  </div>
                </div>
                <div>
                  <DateRange
                    editableDateInputs={true}
                    onChange={handleSelect}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    className="w-full"
                  />
                </div>
              </div>
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg w-full"
                onClick={() => setFilterVisible(false)}
              >
                Apply Filter
              </button>
            </div>
          )}
        </div>
        <div className="container mx-auto mt-1">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full md:w-[60%] px-4 mb-4">
              <ApexChart />
            </div>
            <div className="w-full md:w-[40%] px-4 mb-4">
              <ApexChartCircle />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 mt-5">
          <div className="grid grid-cols-3 gap-5">
            <div className="shadow-xl bg-white rounded-xl p-5">
              <div className="flex gap-5 flex-col items-start">
                <div className="bg-yellow-100 rounded-xl p-2">
                  <FaMotorcycle className="text-primary text-2xl md:text-5xl" />
                </div>
                <div>
                  <p className="text-xs">Motor Vehicles</p>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg md:text-3xl font-black">210</h2>
                    <p className="text-sm">Today</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-xl bg-white rounded-xl p-5">
              <div className="flex gap-5 flex-col items-start">
                <div className="bg-[#FFF4DE] rounded-xl p-2">
                  <FaCarSide className="text-yellow-300 text-2xl md:text-5xl" />
                </div>
                <div>
                  <p className="text-xs">Motor Vehicles</p>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg md:text-3xl font-black">115</h2>
                    <p className="text-sm">Today</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-xl bg-white rounded-xl p-5">
              <div className="flex gap-5 flex-col items-start">
                <div className="bg-green-100 rounded-xl p-2">
                  <FaCirclePlus className="text-primary text-2xl md:text-5xl" />
                </div>
                <div>
                  <p className="text-xs">Total Vehicles</p>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg md:text-3xl font-black">325</h2>
                    <p className="text-sm">Today</p>
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
                <p className="text-primary text-2xl md:text-5xl font-bold">Rp.2.530.000</p>
                <img
                  src="./assets/img/dashboard/rupiah.png"
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
