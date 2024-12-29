import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaMotorcycle } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import eachDayOfInterval from "date-fns/eachDayOfInterval";

// Contoh data pengunjung harian untuk setiap tanggal
const rawData = {
  Motor: [
    12, 15, 14, 17, 12, 14, 21, 18, 19, 21, 23, 16, 12, 14, 15, 20, 14, 12, 16, 17, 14, 18, 19, 23,
    12, 14, 16, 18, 17, 15,
  ],
  Mobil: [
    13, 12, 13, 18, 9, 12, 14, 16, 12, 19, 20, 15, 14, 13, 17, 11, 18, 13, 14, 15, 12, 10, 15, 13,
    14, 11, 13, 16, 12, 14,
  ],
};

const ApexChart = () => {
  const defaultRange = [
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 6),
    },
  ];

  const getFilteredData = () => {
    const start = defaultRange[0].startDate;
    const end = defaultRange[0].endDate;

    const daysInRange = eachDayOfInterval({ start, end });
    const daysCount = daysInRange.length;

    return {
      Motor: rawData.Motor.slice(0, daysCount),
      Mobil: rawData.Mobil.slice(0, daysCount),
      categories: daysInRange.map((date) => format(date, "dd MMM")),
    };
  };

  const filteredData = getFilteredData();

  const options = {
    chart: {
      type: "bar",
      height: 265,
      width: "70%",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: { borderRadius: 5, horizontal: false, columnWidth: "60%" },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ["transparent"] },
    xaxis: {
      categories: filteredData.categories,
    },
    fill: { opacity: 1 },
    tooltip: {
      y: { formatter: (val) => `${val} pengunjung` },
    },
    colors: ["#00E396", "#FFCD56"],
  };

  return (
    <div className="p-4 bg-white w-full h-[265px] rounded-lg shadow-md relative">
      <div className="absolute left-4 bottom-2 flex items-center gap-2">
        <FaMotorcycle className="bg-[#E2FFF3] p-2 text-4xl rounded-lg text-green-500" />
        <FaCarSide className="bg-[#FFF4DE] p-2 rounded-lg text-4xl text-yellow-300" />
      </div>

      <ReactApexChart
        options={options}
        series={[
          { name: "Motor", data: filteredData.Motor },
          { name: "Mobil", data: filteredData.Mobil },
        ]}
        type="bar"
        height={200}
        width="100%"
      />
    </div>
  );
};

export default ApexChart;
