import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChartCircle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [22, 78],
      options: {
        chart: {
          type: "donut",
          // Mengatur posisi donut dengan offset
          offsetX: 0, // Mengatur posisi horizontal (bernilai positif untuk geser ke kanan, negatif ke kiri)
          offsetY: 70, // Mengatur posisi vertikal (bernilai positif untuk geser ke bawah, negatif ke atas)
        },
        colors: ["#FF4560", "#00E396"], // Warna untuk bagian donut
        title: {
          text: "Jumlah Pengunjung", // Judul grafik
          align: "center", // Mengatur posisi judul di tengah
          style: {
            fontSize: "20px",
            color: "#333",
          },
        },
        labels: ["Motor", "Mobil"], // Label untuk setiap bagian
        dataLabels: {
          enabled: true, // Aktifkan data labels
          formatter: (val, { seriesIndex }) => {
            return `${this.state.series[seriesIndex]} (${Math.round((val / 100) * 100)}%)`; // Format label
          },
          style: {
            colors: ["#fff"], // Mengatur warna tulisan label
          },
          offset: 100, // Mengatur offset label dari posisi donut
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        legend: {
          position: "right", // Posisi legend (opsional)
          floating: false,
          fontSize: "14px",
          horizontalAlign: "left",
          onItemClick: {
            toggleDataSeries: true,
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="flex flex-col items-center">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={350} // Ukuran chart
        />
      </div>
    );
  }
}

export default ApexChartCircle;
