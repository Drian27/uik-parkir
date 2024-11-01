import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { IoFilter } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import differenceInDays from "date-fns/differenceInDays";

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
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 6),
      key: "selection",
    },
  ]);
  const [appliedRange, setAppliedRange] = useState(dateRange);

  // Fungsi untuk memfilter data berdasarkan rentang tanggal yang dipilih
  const getFilteredData = () => {
    const start = appliedRange[0].startDate;
    const end = appliedRange[0].endDate;

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

  const applyDateRange = () => {
    // Cek jika rentang tanggal lebih dari 30 hari
    const daysDifference = differenceInDays(dateRange[0].endDate, dateRange[0].startDate);
    if (daysDifference <= 30) {
      setAppliedRange(dateRange);
      setDatePickerOpen(false);
    } else {
      alert("Rentang tanggal maksimal adalah 30 hari.");
    }
  };

  return (
    <div className="p-4 bg-white w-full h-[265px] rounded-lg shadow-md relative">
      <div
        style={{ fontSize: "24px", cursor: "pointer" }}
        onClick={() => setDatePickerOpen(!datePickerOpen)}
        className="flex items-center justify-center gap-3 bg-primary w-24 text-white p-1 rounded-lg"
      >
        <IoFilter className="text-xl" />
        <p className="text-lg">Filter</p>
      </div>

      {datePickerOpen && (
        <div className="absolute top-16 left-0 z-20 bg-white p-4 border rounded shadow-md">
          <DateRangePicker
            onChange={(ranges) => setDateRange([ranges.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
          />
          <button
            onClick={applyDateRange}
            className="mt-2 px-4 py-2 bg-primary text-white rounded-md w-full"
          >
            Terapkan
          </button>
        </div>
      )}

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
