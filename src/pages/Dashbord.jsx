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

const IncomeCard = ({ totalIncome, startDate, endDate }) => (
  <div className="p-5 bg-white rounded-lg shadow-lg">
    <p>
      {startDate && endDate
        ? `${new Date(startDate).toLocaleDateString()} - ${new Date(
            endDate
          ).toLocaleDateString()}`
        : "Loading..."}
    </p>
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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(null);

  // const onFilterApply = ({ startDate, endDate }) => {
  //   console.log("Tanggal mulai:", startDate);
  //   console.log("Tanggal akhir:", endDate);

  //   // Lakukan pemanggilan API atau update state sesuai dengan rentang tanggal yang dipilih
  //   // Contoh jika Anda ingin memanggil dashboard API lagi menggunakan startDate dan endDate
  //   fetchData(startDate, endDate); // Panggil API dengan startDate dan endDate yang baru
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await dashboard();

  //       // Validasi apakah data yang diterima benar
  //       if (response.success && response.data && response.data.summary) {
  //         const { summary } = response.data;

  //         // Set state sesuai data API
  //         setMotorVehicle(summary.total_motorcycles_out);
  //         setCarVehicle(summary.total_cars_out);
  //         setTotalVehicle(summary.total_vehicles_out);
  //         setTotalIncome(summary.total_amount);
  //         setStartDate(summary.start_date);
  //         setEndDate(summary.end_date);
  //       } else {
  //         throw new Error("Struktur respons API tidak sesuai");
  //       }
  //     } catch (err) {
  //       console.error("Error fetching data:", err.response || err.message);
  //       setError("Gagal memuat data dashboard. Silakan coba lagi.");
  //     }
  //   };

  //   fetchData();
  // }, []);

  const fetchData = async (startDate, endDate) => {
    try {
      // Panggil API dengan rentang tanggal (startDate & endDate) yang diberikan
      const response = await dashboard({ startDate, endDate });

      if (response.success && response.data && response.data.summary) {
        const { summary } = response.data;

        setMotorVehicle(summary.total_motorcycles_out);
        setCarVehicle(summary.total_cars_out);
        setTotalVehicle(summary.total_vehicles_out);
        setTotalIncome(summary.total_amount);
        setStartDate(summary.start_date);
        setEndDate(summary.end_date);
      } else {
        throw new Error("Struktur respons API tidak sesuai");
      }
    } catch (err) {
      console.error("Error fetching data:", err.response || err.message);
      setError("Gagal memuat data dashboard. Silakan coba lagi.");
    }
  };

  // Fungsi untuk menangani aplikasi filter
  const onFilterApply = ({ startDate, endDate }) => {
    console.log("Tanggal mulai:", startDate);
    console.log("Tanggal akhir:", endDate);

    // Panggil fungsi fetchData dengan rentang tanggal yang dipilih
    fetchData(startDate, endDate);
  };

  // Panggil fetchData pertama kali ketika komponen di-mount
  useEffect(() => {
    fetchData(startDate, endDate);
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
          <h1 className="text-sm md:text-2xl font-bold text-white">
            DASHBOARD
          </h1>
          <ButtonLogOut />
        </div>
        <FilterDashboard onFilterApply={onFilterApply} />
        <div className="container mx-auto mt-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-[60%] px-4 mb-4">
              <ApexChart startDate={startDate} endDate={endDate} />
            </div>
            <div className="w-full md:w-[40%] px-4 mb-4">
              <ApexChartCircle />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-5 md:grid-cols-2 md:gap-10">
          <div className="grid grid-cols-3 gap-5">
            <VehicleCard
              icon={
                <FaMotorcycle className="text-primary text-2xl md:text-5xl" />
              }
              bgClass="bg-yellow-100"
              label="Motor Vehicles"
              value={motorVehicle}
            />
            <VehicleCard
              icon={
                <FaCarSide className="text-yellow-300 text-2xl md:text-5xl" />
              }
              bgClass="bg-[#FFF4DE]"
              label="Car Vehicles"
              value={carVehicle}
            />
            <VehicleCard
              icon={
                <FaCirclePlus className="text-primary text-2xl md:text-5xl" />
              }
              bgClass="bg-green-100"
              label="Total Vehicles"
              value={totalVehicle}
            />
          </div>
          <IncomeCard
            totalIncome={totalIncome}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
        <Customer />
      </div>
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default Dashboard;
