import React from "react";
import ReactApexChart from "react-apexcharts";

// icons
import { FaMotorcycle } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";

const ApexChartCircle = () => {
  const options = {
    chart: {
      type: "donut",
      width: 300,
    },
    labels: ["Motor", "Mobil"],
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

  const series = [22, 78];

  return (
    <div className="bg-white flex justify-center items-center rounded-lg shadow-lg w-full h-[265px]">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={350}
      />
    </div>
  );
};

export default ApexChartCircle;
