import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { FaMotorcycle } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { dashboard } from "../services/apiDashboard"; // Panggil API dashboard Anda

const ApexChart = () => {
  const [motorData, setMotorData] = useState([]);
  const [carData, setCarData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [motorcyclePercentage, setMotorcyclePercentage] = useState(0);
  const [carPercentage, setCarPercentage] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dashboard(); // Panggil API

        // Ambil data grafik
        setMotorData(data.daily_motor_data || []);
        setCarData(data.daily_car_data || []);

        // Ambil kategori tanggal
        setCategories(data.date_categories || []);

        // Ambil persentase motor dan mobil
        setMotorcyclePercentage(data.motorcycle_percentage_in || 0);
        setCarPercentage(data.car_percentage_in || 0);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []); // Memastikan bahwa useEffect hanya dipanggil satu kali saat komponen pertama kali dirender.

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
      categories: categories, // Data kategori dari API
    },
    fill: { opacity: 1 },
    tooltip: {
      y: { formatter: (val) => `${val} pengunjung` },
    },
    colors: ["#00E396", "#FFCD56"], // Warna untuk motor dan mobil
  };

  return (
    <div className="p-4 bg-white w-full h-[265px] rounded-lg shadow-md relative">
      {/* Bagian Persentase */}
      <div className="absolute left-4 bottom-3 flex justify-center w-full gap-2">
        <div className="flex items-center gap-2">
          <FaMotorcycle className="bg-[#E2FFF3] p-2 text-4xl rounded-lg text-green-500" />
          <p className="text-lg font-semibold text-green-500">{motorcyclePercentage}%</p>
        </div>
        <div className="flex items-center gap-2">
          <FaCarSide className="bg-[#FFF4DE] p-2 rounded-lg text-4xl text-yellow-300" />
          <p className="text-lg font-semibold text-yellow-400">{carPercentage}%</p>
        </div>
      </div>

      {/* Tampilkan Error jika ada masalah fetching */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Chart */}
      <ReactApexChart
        options={options}
        series={[
          { name: "Motor", data: motorData }, // Data motor dari API
          { name: "Mobil", data: carData }, // Data mobil dari API
        ]}
        type="bar"
        height={200}
        width="100%"
      />
    </div>
  );
};

export default ApexChart;
