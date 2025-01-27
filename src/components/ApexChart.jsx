import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FaMotorcycle } from 'react-icons/fa6';
import { FaCarSide } from 'react-icons/fa';
import { dashboard } from '../services/apiDashboard';

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
        const response = await dashboard();
        const data = response.data.summary;

        setMotorData([data.total_motorcycles_out]);
        setCarData([data.total_cars_out]);
        setCategories([`${data.start_date} - ${data.end_date}`]);
        setMotorcyclePercentage(data.motorcycle_percentage);
        setCarPercentage(data.car_percentage);
      } catch (err) {
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  const calculateBarWidth = () => {
    const dataCount = Math.max(motorData.length, carData.length);
    if (dataCount <= 1) return '20%'; // Bar lebih besar jika data sedikit
    if (dataCount <= 5) return '50%';
    if (dataCount <= 10) return '70%';
    return '90%'; // Bar lebih kecil jika data banyak
  };

  const options = {
    chart: {
      type: 'bar',
      height: 265,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
        columnWidth: calculateBarWidth(),
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: { categories: categories },
    fill: { opacity: 1 },
    tooltip: {
      y: { formatter: (val) => `${val} kendaraan` },
    },
    colors: ['#00E396', '#FFCD56'],
  };

  return (
    <div className="p-4 bg-white w-full h-[265px] rounded-lg shadow-md relative">
      {error && <div className="text-center text-red-500">{error}</div>}
      <div className="absolute flex justify-center w-full gap-2 left-4 bottom-3">
        <div className="flex items-center gap-2">
          <FaMotorcycle className="bg-[#E2FFF3] p-2 text-4xl rounded-lg text-green-500" />
          <p className="text-lg font-semibold text-green-500">
            {motorcyclePercentage}%
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaCarSide className="bg-[#FFF4DE] p-2 rounded-lg text-4xl text-yellow-300" />
          <p className="text-lg font-semibold text-yellow-400">
            {carPercentage}%
          </p>
        </div>
      </div>
      <ReactApexChart
        options={options}
        series={[
          { name: 'Motor', data: motorData },
          { name: 'Mobil', data: carData },
        ]}
        type="bar"
        height={200}
        width="100%"
      />
    </div>
  );
};

export default ApexChart;
