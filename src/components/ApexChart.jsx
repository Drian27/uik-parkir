import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

// icons
import { IoFilter } from "react-icons/io5";

const ApexChart = () => {
  const [filter, setFilter] = useState("monthly"); // Default filter monthly
  const [dropdownOpen, setDropdownOpen] = useState(false); // State untuk mengontrol dropdown

  // Data untuk berbagai filter (weekly, monthly, annual)
  const data = {
    weekly: [
      {
        name: "Motocycle",
        data: [12, 15, 14, 17, 12, 14, 21],
      },
      {
        name: "Cars",
        data: [13, 12, 13, 18, 9, 12, 14],
      },
    ],
    monthly: [
      {
        name: "Motocycle",
        data: [44, 55, 41, 67, 22, 43, 21, 49, 63, 82, 99, 78],
      },
      {
        name: "Cars",
        data: [53, 32, 33, 52, 13, 44, 32, 72, 54, 61, 45, 92],
      },
    ],
    annual: [
      {
        name: "Motocycle",
        data: [544, 655, 741, 867, 722, 843],
      },
      {
        name: "Cars",
        data: [653, 532, 533, 652, 513, 644],
      },
    ],
  };

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false, // Menyembunyikan toolbar bawaan
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories:
        filter === "weekly"
          ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
          : filter === "monthly"
          ? ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Des"]
          : ["2018", "2019", "2020", "2021", "2022", "2023"], // untuk annual
    },
    yaxis: {
      title: {
        text: "amount",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " pengunjung";
        },
      },
    },
    colors: ["#00E396", "#FFCD56"], // Warna untuk Motor dan Mobil
  };

  // Fungsi untuk mengubah filter
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setDropdownOpen(false); // Tutup dropdown setelah memilih
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md relative">
      <div
        style={{ fontSize: "24px", cursor: "pointer" }}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center justify-center gap-3 bg-primary w-28 text-white p-1 rounded-lg"
      >
        <IoFilter />
        <p className="text-xl">Filter</p>
      </div>
      {dropdownOpen && (
        <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
          <ul className="py-1">
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleFilterChange("weekly")}
            >
              Weekly
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleFilterChange("monthly")}
            >
              Monthly
            </li>
            <li
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleFilterChange("annual")}
            >
              Annual
            </li>
          </ul>
        </div>
      )}

      {/* Tombol titik tiga untuk filter */}
      <div className="absolute top-6 right-4">
        <h2 className="text-lg font-bold mb-4">
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </h2>
      </div>

      {/* Chart */}
      <ReactApexChart
        options={options}
        series={data[filter]} // Pilih data berdasarkan filter
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
