import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { dashboard } from "../services/apiDashboard";

// icons
import { FaMotorcycle } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";

const ApexChartCircle = () => {
  const [motorcyclePercentage, setMotorcyclePercentage] = useState(0);
  const [carPercentage, setCarPercentage] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dashboard();

        // Set persentase motor dan mobil
        setMotorcyclePercentage(data.motorcycle_percentage_in || 0);
        setCarPercentage(data.car_percentage_in || 0);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: "donut",
      width: 300,
    },
    labels: ["Motor", "Mobil"],
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => `${Math.round(val)}%`, // Tambahkan tanda persen
    },
    colors: ["#00E396", "#FFCD56"],
    legend: {
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%";
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "50%",
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [motorcyclePercentage, carPercentage]; // Nilai persentase dari API

  // if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-white flex justify-center items-center rounded-lg shadow-lg w-full h-[265px] relative">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={350}
      />
      <div className="absolute left-4 bottom-4 flex gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-[#E2FFF3] w-4 h-4 rounded-full"></div>
          <p className="text-sm text-green-500 font-semibold">Motor</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#FFF4DE] w-4 h-4 rounded-full"></div>
          <p className="text-sm text-yellow-400 font-semibold">Mobil</p>
        </div>
      </div>
    </div>
  );
};

export default ApexChartCircle;
