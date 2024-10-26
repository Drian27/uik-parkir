import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChartCircle = () => {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Motor", "Mobil"],
    colors: ["#00E396", "#FFCD56"],
    legend: {
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "22%",
              fontSize: "22px",
            },
          },
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
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={350}
      />
    </div>
  );
};

export default ApexChartCircle;
