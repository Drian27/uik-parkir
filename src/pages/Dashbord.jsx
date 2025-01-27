import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ApexChart from '../components/ApexChart';
import ApexChartCircle from '../components/ApexChartCircle';
import { FaMotorcycle, FaCirclePlus, FaCarSide } from 'react-icons/fa6';
import Customer from '../components/Customer';
import ButtonLogOut from '../components/ButtonLogOut';
// import { dashboard } from '../services/apiDashboard';
import FilterDashboard from '../components/FilterDashboard';
import Skeleton from 'react-loading-skeleton';

const VehicleCard = ({ icon, bgClass, label, value }) => (
  <div className="p-3 bg-white shadow-xl rounded-xl">
    <div className="flex flex-col items-start gap-5">
      <div className={`${bgClass} rounded-xl p-2`}>{icon}</div>
      <div>
        <p className="text-xs">{label}</p>
        <div className="flex items-center gap-2">
          {value !== null ? (
            <h2 className="text-lg font-black md:text-3xl">{value}</h2>
          ) : (
            <Skeleton height={32} width={80} />
          )}
          <p className="text-sm">This Week</p>
        </div>
      </div>
    </div>
  </div>
);

const IncomeCard = ({ totalIncome }) => (
  <div className="p-5 bg-white rounded-lg shadow-lg">
    <p>7 September 2024</p>
    <p className="mt-5 text-xl font-bold">Total Income</p>
    <div className="flex items-center justify-between">
      {totalIncome !== null ? (
        <p className="text-2xl font-bold text-primary md:text-5xl">
          Rp.
          {totalIncome}
        
        </p>
      ) : (
        <Skeleton height={48} width={120} />
      )}
      <img
        src="./assets/img/dashboard/rupiah.png"
        alt="money"
        className="w-32"
      />
    </div>
  </div>
);

const Dashboard = () => {
  const [motorVehicle, setMotorVehicle] = useState(null);
  const [carVehicle, setCarVehicle] = useState(null);
  const [totalVehicle, setTotalVehicle] = useState(null);
  const [totalIncome, setTotalIncome] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedStart = filterRange.startDate.toISOString().split("T")[0];
        const formattedEnd = filterRange.endDate.toISOString().split("T")[0];
        const data = await dashboard({ start_date: formattedStart, end_date: formattedEnd });
        setMotorVehicle(data.total_motorcycles_in || 0);
        setCarVehicle(data.total_cars_in || 0);
        setTotalVehicle(data.total_vehicles_in || 0);
        setTotalIncome(data.total_amount || 0);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Gagal memuat data dashboard. Silakan coba lagi.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="px-2 md:px-5 w-[90%] md:w-full flex flex-col bg-background">
        <div className="flex items-center justify-between w-full px-5 py-1 mt-5 font-semibold md:py-2 bg-primary rounded-2xl">
          <div className="flex items-center gap-2">
            <img
              src="./assets/img/dashboard/logo-uika.png"
              alt="logo"
              className="h-12"
            />
            <div className="text-white">
              <p className="font-light md:text-xl">Abdul Murudul</p>
              <p className="text-xs font-bold md:text-sm">Super Admin</p>
            </div>
          </div>
          <h1 className="text-sm md:text-2xl font-bold text-white">DASHBOARD</h1>
          <ButtonLogOut />
        </div>
        <FilterDashboard />
        <div className="container mx-auto mt-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-[60%] px-4 mb-4">
              <ApexChart />
            </div>
            <div className="w-full md:w-[40%] px-4 mb-4">
              <ApexChartCircle />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-5 md:grid-cols-2 md:gap-10">
          <div className="grid grid-cols-3 gap-5">
            <VehicleCard
              icon={<FaMotorcycle className="text-primary text-2xl md:text-5xl" />}
              bgClass="bg-yellow-100"
              label="Motor Vehicles"
              value={motorVehicle}
            />
            <VehicleCard
              icon={<FaCarSide className="text-yellow-300 text-2xl md:text-5xl" />}
              bgClass="bg-[#FFF4DE]"
              label="Car Vehicles"
              value={carVehicle}
            />
            <VehicleCard
              icon={<FaCirclePlus className="text-primary text-2xl md:text-5xl" />}
              bgClass="bg-green-100"
              label="Total Vehicles"
              value={totalVehicle}
            />
          </div>
          <IncomeCard totalIncome={totalIncome} />
        </div>
        <Customer />
      </div>
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default Dashboard;
