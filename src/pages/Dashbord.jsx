import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ApexChart from "../components/ApexChart";
import ApexChartCircle from "../components/ApexChartCircle";
import { FaMotorcycle, FaCirclePlus, FaCarSide } from "react-icons/fa6";
import Customer from "../components/Customer";
import ButtonLogOut from "../components/ButtonLogOut";
import { dashboard } from "../services/apiDashboard";
import FilterDashboard from "../components/FilterDashboard";
import Skeleton from "react-loading-skeleton";
import { div } from "framer-motion/client";

const VehicleCard = ({ icon, bgClass, label, value }) => (
  <div className="shadow-xl bg-white rounded-xl p-5">
    <div className="flex gap-5 flex-col items-start">
      <div className={`${bgClass} rounded-xl p-2`}>{icon}</div>
      <div>
        <p className="text-xs">{label}</p>
        <div className="flex items-center gap-2">
          {value !== null ? (
            <h2 className="text-lg md:text-3xl font-black">{value}</h2>
          ) : (
            <Skeleton
              height={32}
              width={80}
            />
          )}
          <p className="text-sm">Today</p>
        </div>
      </div>
    </div>
  </div>
);

const IncomeCard = ({ totalIncome }) => (
  <div className="bg-white shadow-lg p-5 rounded-lg">
    <p>7 September 2024</p>
    <p className="font-bold mt-5 text-xl">Total Income</p>
    <div className="flex justify-between items-center">
      {totalIncome !== null ? (
        <p className="text-primary text-2xl md:text-5xl font-bold">{totalIncome}</p>
      ) : (
        <Skeleton
          height={48}
          width={120}
        />
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
  const [filterRange, setFilterRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleFilterApply = (range) => setFilterRange(range);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await transaktionAll();
        setMotorVehicle(data);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, [filterRange]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="px-2 md:px-5 w-[90%] md:w-full flex flex-col bg-background">
        <div className="w-full flex items-center justify-between px-5 py-1 md:py-2 bg-primary mt-5 rounded-2xl font-semibold">
          <div className="flex items-center gap-2">
            <img
              src="./assets/img/dashboard/logo-uika.png"
              alt="logo"
              className="h-12"
            />
            <div className="text-white">
              <p className="md:text-xl font-light">Abdul Murudul</p>
              <p className="md:text-sm text-xs font-bold">Super Admin</p>
            </div>
          </div>
          <h1 className="text-sm md:text-2xl font-bold text-white">DASHBOARD</h1>
          <ButtonLogOut />
        </div>
        <FilterDashboard onFilterApply={handleFilterApply} />
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 mt-5">
          <div className="grid grid-cols-3 gap-5">
            <VehicleCard
              icon={<FaMotorcycle className="text-primary text-2xl md:text-5xl" />}
              bgClass="bg-green-200"
              label="Motorcycle Vehicles"
              value={carVehicle}
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
    </div>
  );
};

export default Dashboard;
